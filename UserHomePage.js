import React from "react";
import AddedExpenses from "../Expenses/Expenses";
import NavHeader from "../UI/NavHeader";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NewExpenseForm from "../Expenses/NewExpenseForm";
import Expenses from "../Expenses/Expenses";
import { authSliceActions } from "../Store/authSlice";
import { useEffect } from "react";

const UserHomePage = () => {
  const authToken = useSelector((state) => state.auth.authToken);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchingUserDetails = async () => {
      const fetchedDetails = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDycBIyb5eyGiqEBkG_inxrLSalZxB0qLI",
        {
          method: "POST",
          body: JSON.stringify({ idToken: authToken }),
        }
      );
      const fetchedDetailsUsersData = await fetchedDetails.json();
      const usersData = fetchedDetailsUsersData.users[0];

      const editPayload = {
        mailVerified: usersData.emailVerified,
        userName: usersData.displayName,
        userURL: usersData.photoUrl,
      };
      console.log(editPayload);
      console.log(editPayload);
      console.log(editPayload);

      dispatch(authSliceActions.editUserDetails(editPayload));
    };
    fetchingUserDetails();
  }, []);

  const [sidebar, setSidebar] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const expenseItems = useSelector((state) => state.expenses.items);

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };
  return (
    <>
      <NavHeader />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
        stroke="white"
        className="w-6 h-6 sidebar-toggler"
        onClick={toggleSidebar}
        style={{ backgroundColor: "blue" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <ul className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
        <li className="sidebar-item">
          <Link to="/profile/accountInfo">Account Info</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/profile/edit">Edit Profile Info</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/profile/expenses">Expenses</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/profile/expenses-analysis">Expenses Analysis</Link>
        </li>
      </ul>
      <NewExpenseForm />
      <Expenses />
    </>
  );
};

export default UserHomePage;
