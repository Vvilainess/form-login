import React, { useState, useEffect } from "react";
import "./FormLogin.css";

const FormLogin = () => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    const inititalValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(inititalValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };
    const validate = ({ email, password }) => {
        const err = {};
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!regex.test(email)) {
            err.email = "This is not a valid email";
        }
        if (!password) {
            err.password = "Password is required";
        } else if (password.length < 4) {
            err.password = "Password must be more than 4 characters";
        } else if (password.length > 10) {
            err.password = "Password cannot exceed more than 10 characters";
        }
        return err;
    };
    useEffect(() => {
        if (formValues.email) {
            setFormErrors({ ...formErrors, email: "" });
        }
        if (formValues.password) {
            setFormErrors({ ...formErrors, password: "" });
        }
    }, [formValues]);

    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="form-title-container">
                        <h1 className="form-title">
                            Admin
                            <span>Dashboard</span>
                        </h1>
                        <p className="form-description">
                            Sign in to your account
                        </p>
                    </div>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-field">
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Email"
                                value={formValues.email}
                                onChange={handleChange}
                            />
                            <span className="email-input-error">
                                {formErrors.email}
                            </span>
                        </div>
                        <div className="form-field">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                autoComplete="true"
                                value={formValues.password}
                                onChange={handleChange}
                            />
                            <span className="password-input-error">
                                {formErrors.password}
                            </span>
                        </div>
                        <div className="form-feature">
                            <div className="form-store-password">
                                <label htmlFor="store-password">
                                    Remember Me
                                </label>
                                <input
                                    type="checkbox"
                                    name="store-password"
                                    class="store-password"
                                />
                            </div>
                            <div className="form-forget-password">
                                <a href="#">Forget Password</a>
                            </div>
                        </div>
                        <div className="form-btn">
                            <input
                                type="submit"
                                value="Sign In"
                                className="signin-btn"
                            />
                        </div>
                        <div className="form-signup">
                            <a href="#">Dont's have an account? Sign up</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormLogin;
