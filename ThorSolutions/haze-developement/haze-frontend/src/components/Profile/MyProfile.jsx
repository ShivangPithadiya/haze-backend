import React, { useEffect, useState, useRef } from "react";
import "../Profile/Profile.css";
import axios from "axios";
import _ from "lodash";

const MyProfile = () => {
  const [userData, setUserData] = useState(null);
  const frmRef = useRef("MyProfile");
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const submitForm = (e) => {
    const frm = e.currentTarget;
    e.preventDefault();
    frm.classList.add("was-validated");
    if (frm.checkValidity() === false) {
      return false;
    }
    let frmdata = new FormData(frm);
    let formDataObject = {};
    for (let [key, value] of frmdata.entries()) {
      if (formDataObject[key]) {
        if (Array.isArray(formDataObject[key])) {
          formDataObject[key].push(value);
        } else {
          formDataObject[key] = [formDataObject[key], value];
        }
      } else {
        formDataObject[key] = value;
      }
    }
    console.log(formDataObject);
    try {
      const url = `http://ec2-52-6-145-35.compute-1.amazonaws.com:5001/api/profile/addprofiledetails`;
      const response = axios.post(url, formDataObject);
      if (response.status === 304) {
        return;
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    const userGetData = JSON.parse(localStorage.getItem("user"));
    const fetchId = userGetData._id;
    const fetchData = async () => {
      try {
        const url = `http://ec2-52-6-145-35.compute-1.amazonaws.com:5001/api/profile/getuser/${fetchId}`;
        const response = await axios.get(url);
        if (response.status === 304) {
          return;
        }
        setUserData(response.data.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  console.log(userData);
  return (
    <div className="left_wrapper">
      <div className="wrapper_header">
        <div className="wraper_header_title">Your Profile</div>
      </div>
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9 col-12">
              <form
                ref={frmRef}
                method="post"
                className="needs-validation"
                noValidate
                onSubmit={submitForm}
              >
                <input
                  type="hidden"
                  name="userId"
                  value={_.get(userData, "_id", "")}
                />
                <div className="row mx-0 px-0">
                  <div className="col-lg-10 col-12 ps-lg-0">
                    <div className=" pb-2 position-relative">
                      <div className="mb-3 upload-img">
                        <label for="formFile" className="form-label ">
                          <div className="updv position-relative">
                            {selectedImage ? (
                              <img
                                src={selectedImage}
                                alt="Selected"
                                className="mainuploadimg "
                              />
                            ) : (
                              <img
                                src={"./assets/img/Avatar1.png"}
                                alt="Default"
                                className="mainuploadimg "
                              />
                            )}

                            <input
                              type="file"
                              name="profileImage"
                              ref={fileInputRef}
                              style={{ display: "none" }}
                              onChange={handleFileChange}
                            />
                            <img
                              class="edit-icon"
                              src="./public/assets/img/group.svg"
                              onClick={handleIconClick}
                            />
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-10 col-12 ps-lg-0">
                    <div className="mb-3 pb-2 position-relative">
                      <label
                        className="form-label profile-input-label "
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <div className="position-relative edit-icons">
                        <input
                          className="form-control profile-input"
                          name="name"
                          defaultValue={_.get(userData, "name", "")}
                          placeholder="First name*"
                          type="text"
                          required
                        />
                        <img class="edit-icon" src="./public/assets/img/group.svg" />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-10 col-12 ps-lg-0">
                    <div className="mb-3 pb-2 position-relative">
                      <label
                        className="form-label profile-input-label "
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <div className="position-relative edit-icons">
                        <input
                          className="form-control profile-input"
                          name="email"
                          defaultValue={_.get(userData, "email", "")}
                          placeholder="Email*"
                          type="text"
                          required
                        />
                        <img class="edit-icon" src="./public/assets/img/group.svg" />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-10 col-12 ps-lg-0">
                    <div className="mb-3 pb-2 position-relative">
                      <label
                        className="form-label profile-input-label "
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <div className="position-relative edit-icons">
                        <input
                          className="form-control profile-input"
                          name="password"
                          placeholder="Password*"
                          type="text"
                          required
                        />
                        <img class="edit-icon" src="./public/assets/img/group.svg" />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5 col-12 ps-lg-0">
                    <div className="mb-3 pb-2 position-relative">
                      <label
                        className="form-label profile-input-label "
                        htmlFor="City"
                      >
                        City
                      </label>
                      <input
                        className="form-control profile-input"
                        name="city"
                        defaultValue={_.get(userData, "city", "")}
                        placeholder="City*"
                        type="text"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-5 col-12 ps-lg-0">
                    <div className="mb-3 pb-2 position-relative">
                      <label
                        className="form-label profile-input-label "
                        htmlFor="State"
                      >
                        State
                      </label>
                      <input
                        className="form-control profile-input"
                        name="state"
                        placeholder="State*"
                        defaultValue={_.get(userData, "state", "")}
                        type="text"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-10 col-12 ps-lg-0">
                    <div className="mb-3 pb-2 position-relative">
                      <label
                        className="form-label profile-input-label "
                        htmlFor="Country"
                      >
                        Country
                      </label>
                      <input
                        className="form-control profile-input"
                        name="country"
                        defaultValue={_.get(userData, "country", "")}
                        placeholder="Country*"
                        type="text"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-10 col-12 px-lg-0 text-end mt-3">
                    <button
                      type="submit"
                      className="btn btn-primary w-sm waves-effect waves-light"
                    >
                      {"Save Changes"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
