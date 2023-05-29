import React, { useState } from "react";
import Canvas from "../canvas";
import { useSnapshot } from "valtio";
import state from "../store";

const initialValue = {
  size: "",
  quantity: 0,
  deliveryMethod: "",
  email: "",
  fullName: "",
  address: "",
  paymentMethod: "",
};

const Order = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [value, setValue] = useState(0);

  const [orderData, setOrderData] = useState(initialValue);

  const onValueChange = (e) => {
    const { name, value } = e.target;
    if (name === "quantity") {
      setOrderData({ ...orderData, [name]: value });
    } else {
      setOrderData({ ...orderData, [name]: value });
    }
  };
  const onClick = (type) => {
    if (type === "increment") {
      setOrderData({ ...orderData, ["quantity"]: value + 1 });
      setValue(value + 1);
    } else {
      setOrderData({ ...orderData, ["quantity"]: value - 1 });
      setValue(value - 1);
    }
  };

  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value);
    onValueChange(e);
  };

  const handleDeliveryChange = (event) => {
    setSelectDelivery(event.target.value);
  };
  console.log(orderData.quantity, value);
  const radioOptions = [
    { label: "S", value: "S" },
    { label: "M", value: "M" },
    { label: "L", value: "L" },
    { label: "XL", value: "XL" },
    { label: "XXL", value: "XXL" },
  ];
  const deliveryOptions = [
    { method: "Standard", timeline: "3-7 days", value: "Standard" },
    { method: "Fedex", timeline: "2-4 days", value: "Fedex" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission or any other logic
    console.log(orderData);
  };

  return (
    <div>
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <img
          src="./threejs.png"
          alt="logo"
          className="w-8 h-8 object-contain"
        ></img>
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div className="relative">
            <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </a>
                <span className="font-semibold text-gray-900">Shop</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                  href="#"
                >
                  2
                </a>
                <span className="font-semibold text-gray-900">Shipping</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                  href="#"
                >
                  3
                </a>
                <span className="font-semibold text-gray-500">Payment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
          <div className="px-4 pt-8">
            <p className="text-xl font-medium">Order Summary</p>
            <p className="text-gray-400">
              Check your items. And select a suitable shipping method.
            </p>
            <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-6 sm:px-6">
              <div className="flex flex-row rounded-lg bg-white">
                <img
                  className=" h-24 w-36 rounded-md border object-cover object-center"
                  src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <div className="flex w-full flex-col px-6 py-2">
                  <span className="font-semibold">Premium Tshirt</span>
                  <span className="float-right text-gray-400">
                    42EU - 8.5US
                  </span>
                  <p className="text-lg font-bold">$138.99</p>
                </div>
              </div>

              <div className="pt-6 flex flex-row justify-between ">
                <ul className="flex gap-1">
                  {radioOptions.map((option) => (
                    <li className="mr-2">
                      <label
                        key={option.value}
                        className={`inline-block w-[38px] h-[38px] text-center leading-[38px] rounded-[50%] ${
                          selectedValue === option.value
                            ? "bg-blue-200 text-blue-400"
                            : "bg-gray-200 text-gray-400"
                        } text-xs`}
                      >
                        <input
                          type="radio"
                          name="size"
                          value={option.value}
                          className="hidden"
                          onChange={handleRadioChange}
                        />
                        <span className="radio-mark"></span>
                        {option.label}
                      </label>
                    </li>
                  ))}
                </ul>
                <div class="custom-number-input w-24 ml-10">
                  <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent border">
                    <button
                      onClick={() => onClick("")}
                      class=" bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                    >
                      <span class="m-auto text-2xl font-thin">−</span>
                    </button>
                    <input
                      class="outline-none focus:outline-none text-center w-full  font-semibold text-md  md:text-basecursor-default flex items-center text-gray-700 "
                      value={value}
                      name="quantity"
                    ></input>
                    <button
                      onClick={() => onClick("increment")}
                      class="bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                    >
                      <span class="m-auto text-2xl font-thin">+</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-8 text-lg font-medium">Shipping Methods</p>
            <div className="mt-5 grid gap-6">
              <div className="flex flex-row gap-3">
                {deliveryOptions.map((option) => (
                  <div className="relative w-full">
                    <input
                      className="peer hidden"
                      id={option.method}
                      type="radio"
                      name="deliveryMethod"
                      onChange={handleDeliveryChange}
                      value={option.value}
                      checked
                    />
                    <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                      className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-3"
                      for={option.method}
                    >
                      <div className="ml-3 mr-12 ">
                        <span className="mt-2 font-semibold">
                          {option.method}
                        </span>
                        <p className="text-slate-500 text-sm leading-6">
                          Delivery: {option.timeline}
                        </p>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
            <p className="text-xl font-medium">Payment Details</p>
            <p className="text-gray-400">
              Complete your order by providing your payment details.
            </p>
            <div className="">
              <label
                for="email"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="your.email@gmail.com"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
              </div>
              <label
                for="card-holder"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Your Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="card-holder"
                  name="fullName"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your full name here"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                    />
                  </svg>
                </div>
              </div>

              <label
                for="billing-address"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Billing Address
              </label>

              <div className="relative">
                <input
                  type="text"
                  id="billing-address"
                  name="address"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Street Address"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <img
                    className="h-4 w-4 object-contain"
                    src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg"
                    alt=""
                  />
                </div>
              </div>

              <div className="mt-5 grid gap-6">
                <div className="flex flex-row gap-3">
                  <div className="relative w-full">
                    <input
                      className="peer hidden"
                      id="radio_3"
                      type="radio"
                      name="radio"
                      checked
                    />
                    <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-2 w-2 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                      className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-3"
                      for="radio_3"
                    >
                      <div className="ml-3 mr-12 ">
                        <span className="mt-2 text-sm font-semibold">
                          Cash On Delivery
                        </span>
                      </div>
                    </label>
                  </div>
                  <div className="relative w-full">
                    <input
                      className="peer hidden"
                      id="radio_4"
                      type="radio"
                      name="radio"
                      checked
                    />
                    <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-2 w-2 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                      className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-3"
                      for="radio_4"
                    >
                      <div className="ml-3 mr-12">
                        <span className="mt-2 text-sm font-semibold">
                          Online Payment
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Subtotal</p>
                  <p className="font-semibold text-gray-900">$399.00</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Shipping</p>
                  <p className="font-semibold text-gray-900">$8.00</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">$408.00</p>
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Order;
