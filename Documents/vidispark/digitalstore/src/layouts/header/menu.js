import Link from "next/link";
import { Fragment } from "react";

export const Home = () => (
  <li className="menu-item">
    <Link href="/">
      <a className="menu-link">Home</a>
    </Link>
  </li>
);
export const Explore = () => (
  <Fragment>
    <li className="menu-item">
      <Link href="/02-explore">
        <a className="menu-link">Explore</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/04-item-versions">
        <a className="menu-link">Item versions</a>
      </Link>
    </li>
  </Fragment>
);
export const Sellers = () => (
  <li className="menu-item">
    <Link href="/07-sellers">
      <a className="menu-link">Sellers</a>
    </Link>
  </li>
);
export const Pages1 = () => (
  <Fragment>
    <li className="menu-item">
      <Link href="/">
        <a className="menu-link">Home</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/02-explore">
        <a className="menu-link">Explore</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/03-shop-category">
        <a className="menu-link">Shop Category</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/04-item-versions">
        <a className="menu-link">Item Versions</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/05-product">
        <a className="menu-link">Product Page</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/06-profile-page">
        <a className="menu-link">Profile Page</a>
      </Link>
    </li>
  </Fragment>
);
export const Pages2 = () => (
  <Fragment>
    <li className="menu-item">
      <Link href="/07-sellers">
        <a className="menu-link">Sellers</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/08-shopping-cart">
        <a className="menu-link">Shopping Cart</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/09-checkout">
        <a className="menu-link">Checkout</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/25-notifications">
        <a className="menu-link">Notifications</a>
      </Link>
    </li>
  </Fragment>
);
export const Pages3 = () => (
  <Fragment>
    <li className="menu-item">
      <Link href="/26-profile-info">
        <a className="menu-link">Profile Info</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="#">
        <a className="menu-link">Account Settings</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="#">
        <a className="menu-link">Notification Settings</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/10-profile-dashboard">
        <a className="menu-link">Dashboard</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/11-profile-sales-statement">
        <a className="menu-link">Sales Statement</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/12-profile-upload-item">
        <a className="menu-link">Upload Item</a>
      </Link>
    </li>
  </Fragment>
);
export const Pages4 = () => (
  <Fragment>
    <li className="menu-item">
      <Link href="/13-profile-manage-items">
        <a className="menu-link">Manage Items</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/14-profile-payment-history">
        <a className="menu-link">Payouts</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/15-profile-purchases">
        <a className="menu-link">Purchases</a>
      </Link>
    </li>
  </Fragment>
);
export const Blogs = () => (
  <Fragment>
    <li className="menu-item">
      <Link href="/16-blog-grid">
        <a className="menu-link">Blog grid</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/17-blog-classic">
        <a className="menu-link">Blog classic</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/18-blog-post-centered">
        <a className="menu-link">Blog post centered</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/19-blog-post-sidebar">
        <a className="menu-link">Blog post sidebar</a>
      </Link>
    </li>
  </Fragment>
);
export const Pages5 = () => (
  <Fragment>
    <li className="menu-item">
      <Link href="/22-faq">
        <a className="menu-link">Frequently Asked Questions</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/20-become-a-creator">
        <a className="menu-link">Become a Creator</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/21-contact">
        <a className="menu-link">Contact Us</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/23-login">
        <a className="menu-link">Login</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/24-register">
        <a className="menu-link">Register</a>
      </Link>
    </li>
  </Fragment>
);
export const Logo = () => (
  <Link href="/">
    <a className="logo-link">
      <div className="logo-img">
        <img src="svg/logo-ds.svg" alt="logo" />
      </div>
      <div className="logo-text">Cryptoki</div>
    </a>
  </Link>
);
