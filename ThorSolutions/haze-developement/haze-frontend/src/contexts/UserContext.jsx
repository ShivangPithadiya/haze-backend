import React, { useEffect, createContext, useState } from "react";
import axios from "axios";
import Utils from "../Utils";
import { useCookies } from "react-cookie";
const UserContext = createContext();

const UserProvider = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies([Utils.siteCookieName]);
  const [userData, setUserData] = useState(cookies[Utils.siteCookieName]);
  const addToUserData = (data) => {
    setUserData({ ...userData, ...data });
    const cookieData = { ...cookies[Utils.siteCookieName], ...data };
    setCookie(Utils.siteCookieName, JSON.stringify(cookieData), Utils.getCookieOptions());
  };
  const apiHeaders = (extraHeaders = {}) => {
    let headers = {
      headers: {
        Accept: "application/json, text/plain, */*",
      },
    };

    headers["headers"] = {
      ...headers.headers,
      ...extraHeaders,
    };
    return headers;
  };
  const setServerData = (url, data, method = "put", extraHeaders = {}) => {
    return new Promise((resolve, reject) => {
      axios[method](Utils.apiUrl(url), data, apiHeaders(extraHeaders))
        .then((res) => {
          if (res.data.success) {
            resolve(res.data);
          } else {
            reject(res.data.message);
          }
        })
        .catch(reject);
    });
  };
  const goLogin = ({ email, pass }, callback) => {
    axios
      .post(
        Utils.apiUrl("user/login"),
        `&user=${email}&pass=${pass}`,
        apiHeaders()
      )
      .then((res) => {
        if (res.data.success) {
          let mdata = { _mdata: [email, pass] };
          setUserData({ ...res.data.userData, ...mdata });
          const cookieData = {
            ...cookies[Utils.siteCookieName],
            ...res.data.userData,
            token: res.data.token,
            ...mdata,
          };
          setCookie(
            Utils.siteCookieName,
            JSON.stringify(cookieData),
            Utils.getCookieOptions()
          );
        }
        return res;
      })
      .then((res) =>
        callback(res.data.success, res.data.message, res.data.flag)
      )
      .catch((err) => {
        callback(false, err.message);
      });
  };
  return (
    <UserContext.Provider
      value={{
        apiHeaders,
        setServerData,
        goLogin,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContext;
export { UserProvider };
