import React from "react";
import { useParams, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GreetingFunctionalApp from "../components/chapter_3/GreetingFunctionalComponent";
import GreetingClassApp from "../components/chapter_3/GreetingClassComponent";
import CounterFunctionalApp from "../components/chapter_3/CounterFunctionalComponent";
import CounterClassApp from "../components/chapter_3/CounterClassComponent";
import UserListApp from "../components/chapter_3/UserListApp";
import UserDashboardApp from "../components/chapter_4/UserDashboardApp";
import LoginFormApp from "../components/chapter_5/LoginForm";
import NestedCategoryListApp from "../components/chapter_6/NestedCategoryList";
import RecursiveNestedCategoryListApp from "../components/chapter_6/RecursiveNestedCategoryList";
import ProductListAddToCartApp from "../components/chapter_6/ProductListAddToCart";
import ShoppingApp from "../components/chapter_7/ShoppingCart";
import TimerApp from "../components/chapter_9/TimeTracker";
import ShoppingCartApp from "../components/chapter_10/ShoppingCart";
import FormikExampleApp from "../components/chapter_11/FormikExample";
import ReactHookFormApp from "../components/chapter_11/ReactHookForm";
import CheckoutFormApp from "../components/chapter_11/CheckoutForm";
import BlogApp from "../components/chapter_12/BlogApp";
import DomPurifySanitizationApp from "../components/chapter_15/DomPurifySanitization";
import EscapingOutputApp from "../components/chapter_15/EscapingOutput";
import RoleBasedAccessControlApp from "../components/chapter_15/RoleBasedAccessControl";
import AccessibleFormApp from "../components/chapter_16/AccessibleForm";
import WelcomeApp from "../components/chapter_16/Welcome";
import MultiLingualWelcomeApp from "../components/chapter_16/MultiLingualWelcome";
import FetchExampleApp from "../components/chapter_18/FetchExample";
import AxiosExampleApp from "../components/chapter_18/AxiosExample";
import PostsApp from "../components/chapter_18/Posts";
import StripePaymentFormApp from "../components/chapter_18/StripePaymentForm";
import FetchFromFirebaseApp from "../components/chapter_18/FetchFromFirebase";
import CompountComponentApp from "../components/chapter_19/CompoundComponent";
import ControlledUncontrolledApp from "../components/chapter_19/ControlledUncontrolled";
import CustomHookFetchDataApp from "../components/chapter_19/CustomHookFetchData";
import HigherOrderComponentApp from "../components/chapter_19/HigherOrderComponent";
import RenderPropsApp from "../components/chapter_19/RenderProps";
import RetailApp from "../components/chapter_20/RetailApp";

const ExamplePage = () => {
  const { id } = useParams();

  const exampleComponents = {
    1: <GreetingFunctionalApp />,
    2: <GreetingClassApp />,
    3: <CounterFunctionalApp />,
    4: <CounterClassApp />,
    5: <UserListApp />,
    6: <UserDashboardApp />,
    7: <LoginFormApp />,
    8: <NestedCategoryListApp />,
    9: <RecursiveNestedCategoryListApp />,
    10: <ProductListAddToCartApp />,
    11: <ShoppingApp />,
    12: <TimerApp />,
    13: <ShoppingCartApp />,
    14: <FormikExampleApp />,
    15: <ReactHookFormApp />,
    16: <CheckoutFormApp />,
    17: <BlogApp />,
    18: <DomPurifySanitizationApp />,
    19: <EscapingOutputApp />,
    20: <RoleBasedAccessControlApp />,
    21: <AccessibleFormApp />,
    22: <WelcomeApp />,
    23: <MultiLingualWelcomeApp />,
    24: <FetchExampleApp />,
    25: <AxiosExampleApp />,
    26: <PostsApp />,
    27: <StripePaymentFormApp />,
    28: <FetchFromFirebaseApp />,
    29: <CompountComponentApp />,
    30: <ControlledUncontrolledApp />,
    31: <CustomHookFetchDataApp />,
    32: <HigherOrderComponentApp />,
    33: <RenderPropsApp />,
    34: <RetailApp />,
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 p-6">
      <ToastContainer position="bottom-right" autoClose={2000} />

      {/* Example Box - Wider for Better Spacing */}
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-4xl">
        {/* Example Header */}
        <div className="sticky top-0 bg-white shadow-md p-6 rounded-t-lg z-10">
          <h2 className="text-3xl font-bold text-green-600">Example {id}</h2>
          <p className="text-gray-700 text-lg mt-2">
            Explore the functionality demonstrated in this example.
          </p>
        </div>

        {/* Example Content - Expanded for More Space */}
        <div className="bg-gray-50 p-6 rounded-md text-center min-h-[400px] flex items-center justify-center">
          {exampleComponents[id] || <p className="text-red-500 text-lg">Example not found.</p>}
        </div>

        {/* Back Button */}
        <div className="sticky bottom-0 bg-white shadow-md p-6 rounded-b-lg text-center">
          <Link
            to="/"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-xl transition hover:bg-green-700 hover:shadow-md"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExamplePage;
