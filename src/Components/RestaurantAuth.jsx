import React from "react";
import Form from "react-bootstrap/Form";
import "../Assets/css/restaurant.css";
import { useState } from "react";
import { restaurantLogin, restaurantRegister } from "../Services/allAPI";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
function RestaurantAuth({ register }) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    cpassword: "",
    restaurantName: "",
    address: "",
  });

  //   login handle
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    if (!email || !password) {
      toast.error("Please fill the form completely !!");
    } else {
      const result = await restaurantLogin(userData);
      console.log(result);
      if (result.status === 200) {
        sessionStorage.setItem(
          "existingUser",
          JSON.stringify(result.data.existingUser)
        );
        sessionStorage.setItem("token", result.data.token);
        toast.success("login successful");
        setUserData({
          email: "",
          password: "",
        });
      } else {
        toast.error(result.response.data);
        console.log(result);
      }
    }
  };

  // register handle
  const handleRegister = async (e) => {
    e.preventDefault();
    const { restaurantName, email, password, cpassword, address } = userData;
    if (!restaurantName || !email || !password || !cpassword || !address) {
      toast.error("Please fill the form completely !!");
    } else {
      if (password !== cpassword) {
        toast.error("Passwords dosent match");
      } else {
        const result = await restaurantRegister(userData);
        console.log(result);
        if (result.status === 200) {
          toast.success(`${result.data.restaurantName} Registered Succesfully`);
          setUserData({
            email: "",
            password: "",
            cpassword: "",
            restaurantName: "",
            address: "",
          });
          navigate("/restaurant/login");
        } else {
          toast.error(result.response.data);
          console.log(result);
        }
      }
    }
  };
  const isRegisterForm = register ? true : false;
  console.log(userData);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />{" "}
      <div
        className="d-flex justify-content-center align-items-center logbg"
        style={{ height: "100vh" }}
      >
        <div
          style={{ width: "70%", height: "70%", position: "relative" }}
          className="d-flex border border-1 "
        >
          <div
            style={{ width: "40%", height: "100%" }}
            className="rbg-image"
          ></div>
          <div style={{ position: "absolute", top: "25px", right: "30px" }}>
            <Link to={"/"}>
              {" "}
              <i className="fa-solid fa-xmark text-muted fa-xl"></i>
            </Link>
          </div>
          <div style={{ width: "60%", height: "100%" ,backgroundColor:"white"}}>
            <div style={{ padding: "10%" }} className="mt-5">
              {isRegisterForm ? (
                <h3 className="fw-100">Create account!</h3>
              ) : (
                <h3 className="fw-100">Welcome back!</h3>
              )}
              {/* Sign In Form */}
              <form>
                <div className="form-floating mb-3">
                  {isRegisterForm && (
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="Restaurant name"
                        value={userData.restaurantName}
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            restaurantName: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  )}
                </div>
                <div className="form-floating mb-3">
                  {isRegisterForm && (
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="Address / Location"
                        value={userData.address}
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            address: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  )}
                </div>
                <div className="form-floating mb-3">
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control
                      type="email"
                      placeholder="Email address"
                      value={userData.email}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          email: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </div>
                <div className="form-floating mb-3">
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control
                      type="email"
                      placeholder="Password"
                      value={userData.password}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          password: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </div>
                <div className="form-floating mb-3">
                  {isRegisterForm && (
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Control
                        type="email"
                        placeholder="Confirm password"
                        value={userData.cpassword}
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            cpassword: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  )}
                </div>
                {!isRegisterForm && (
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="remember"
                    />
                    <label htmlFor="remember">Remember password</label>
                  </div>
                )}
                <div className="d-grid">
                  {isRegisterForm ? (
                    <button
                      className="btn btn-dark rounded"
                      onClick={handleRegister}
                    >
                      Register
                    </button>
                  ) : (
                    <button
                      className="btn btn-dark rounded"
                      onClick={handleLogin}
                    >
                      Sign in
                    </button>
                  )}
                  <div className="text-center">
                    {isRegisterForm ? (
                      <p className="text-muted mt-2">
                        Already registerd ?
                        <Link
                          to={"/restaurant/login"}
                          className="text-lowercase text-decoration-none text-warning ms-1"
                        >
                          Login here
                        </Link>
                      </p>
                    ) : (
                      <p className="text-muted mt-2">
                        New user ?
                        <Link
                          to={"/restaurant/register"}
                          className="text-lowercase text-decoration-none text-warning ms-1"
                        >
                          Create account
                        </Link>
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantAuth;
