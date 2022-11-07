import React, { Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  increaseNumber,
  decreaseNumber,
  updateHistory,
  getPostsThunk,
} from "../../../slices/countSlice";

import "./style.css";
import { unwrapResult } from "@reduxjs/toolkit";

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.handleSignup = this.handleSignup.bind(this);
    this.state = {
      Auth: {
        username: "",
        email: "",
      },
      IsRegister: false,
    };
  }

  componentDidMount() {
    console.log("Register componentDidMount");
  }

  componentWillUnmount() {
    console.log("Register componentWillUnmount");
  }

  // componentDidUpdate(prevProps) {
  //   const { number, history } = this.props;
  //   console.log("History", history);
  //   if (number != prevProps.number) {
  //     console.log("Prev", prevProps.number);
  //     console.log("After", number);
  //   }
  // }

  // shouldComponentUpdate(nextProps) {
  //   if (nextProps.number !== this.props.number) {
  //     console.log("Prev", this.props.number);
  //     console.log("After", nextProps.number);
  //     return true;
  //   }
  //   return false;
  // }

  handleSignup() {
    if (
      this.state.Auth.email === "test@gmail.com" &&
      this.state.Auth.username === "test"
    ) {
      this.setState((prevState) => ({
        IsRegister: {
          ...prevState.IsRegister,
          IsRegister: true,
        },
      }));
    } else {
      alert("Sign up fail");
    }
  }

  componentDidUpdate() {
    if (this.state.IsRegister) {
      alert("Sign up successfully, redirect to home page !");
    }
  }

  render() {
    const {
      number,
      increaseNumber,
      decreaseNumber,
      updateHistory,
      getPostsThunkAPI,
    } = this.props;

    // const handleCallAxios = async () => {
    //   const response = await stravaApi.getPosts();
    //   const response1 = await stravaApi.postPosts();
    //   const response2 = await stravaApi.getbyPosts(1);
    // };

    // const handleAddHistory = async (e) => {
    //   updateHistory(e);
    // };

    const handleIncreaseNumber = async () => {
      increaseNumber();
      await getPostsThunkAPI(1);
    };

    const handleDecreaseNumber = () => {
      decreaseNumber();
    };

    return (
      <div className="sign-up-form">
        <p>{number}</p>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "20%",
          }}
          noValidate
          autoComplete="off"
        >
          <Typography sx={{ fontWeight: "bold" }} variant="h4" gutterBottom>
            Sign up with email
          </Typography>
          <TextField
            InputLabelProps={{
              style: { color: "#000000", fontWeight: "bold" },
            }}
            margin="normal"
            label="Username"
            variant="standard"
            onChange={(e) => {
              this.setState((prevState) => ({
                Auth: {
                  ...prevState.Auth,
                  username: e.target.value,
                },
              }));
            }}
          />
          <TextField
            InputLabelProps={{
              style: { color: "#000000", fontWeight: "bold" },
            }}
            fullWidth
            label="Email"
            variant="standard"
            helperText="Passwords must contain at leat 8 characters"
            style={{ marginBottom: "20px" }}
            onChange={(e) => {
              this.setState((prevState) => ({
                Auth: {
                  ...prevState.Auth,
                  email: e.target.value,
                },
              }));
            }}
          />
          <Typography
            sx={{ fontWeight: "light" }}
            variant="caption"
            gutterBottom
            margin="normal"
          >
            By siging up you are agreeing to our{" "}
            <a className="link" href="https://www.izibds.com/">
              Ters of Service.
            </a>
          </Typography>
          <Typography
            margin="normal"
            sx={{ fontWeight: "light" }}
            variant="caption"
            gutterBottom
            style={{ marginBottom: "20px" }}
          >
            View our{" "}
            <a className="link" href="https://www.izibds.com/">
              Privacy Policy.
            </a>
          </Typography>
          <button
            type="button"
            onClick={() => this.handleSignup()}
            className="btn-signup"
          >
            Agree and Sign Up
          </button>

          <button
            type="button"
            onClick={() => handleIncreaseNumber()}
            className="btn-layout bg-fb"
          >
            <span className="icon">
              <i className="fab fa-facebook"></i>
            </span>
            <span className="">Continue with Facebook</span>
          </button>

          <button
            type="button"
            onClick={() => handleDecreaseNumber()}
            className="btn-layout bg-gg"
          >
            <span className="icon icon-google"></span>
            <span className="">Continue with Google</span>
          </button>
        </Box>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  number: state.count.number,
  history: state.count.history,
});

const mapDispatchToProps = (dispatch) => ({
  increaseNumber: () => {
    dispatch(increaseNumber());
  },
  decreaseNumber: () => {
    dispatch(decreaseNumber());
  },
  updateHistory: (item) => {
    dispatch(updateHistory(item));
  },
  getPostsThunkAPI: (page) => {
    dispatch(getPostsThunk(page))
      .then(unwrapResult)
      .then((rs) => {
        console.log("Promise", rs);
      })
      .catch((err) => {
        console.error(err);
      });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
