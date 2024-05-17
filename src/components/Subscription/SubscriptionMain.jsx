import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { Button, Modal } from "antd";
import { FaCheckCircle } from "react-icons/fa";
import card from "../../assets/mastercardlogo.png";
import { CiCreditCard1 } from "react-icons/ci";
import BigLogo from "../../assets/logoBig.png";
const SubscriptionMain = () => {
  const [paymentForm, setPaymentForm] = useState(false);
  const [submitModal, setSubmitModal] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolderName: "",
    billingAddress: "",
    addressLinetwo: "",
    city: "",
    zip: "",
    state: "",
    country: "USA",
  });

  const toggleFormPayment = () => {
    setPaymentForm(!paymentForm);
  };

  const closeModal = () => {
    setPaymentForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // This should correctly update the corresponding field in the state
    });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFormSubmit = () => {
    console.log("Form data:", formData);

    setFormData({
      email: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardHolderName: "",
      billingAddress: "",
      addressLinetwo: "",
      city: "",
      zip: "",
      state: "",
    });

    closeModal();
    setSubmitModal(true);
  };
  return (
    <>
      <div className="scrollbar-hide w-auto  ">
        <h1 className="text-lg font-bold mb-2 ">Subscription</h1>
        <hr />
        <div className="p-5">
          <div className=" mt-4 w-full bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-2xl flex  items-center text-center flex-col space-y-5 py-4 ">
            <FaRegCheckCircle className="text-[4rem] mt-10" />
            <h2 className="text-2xl font-extrabold">Annual Subscription</h2>
            <p className="text-sm lg:text-lg  px-14">
              With a free account, you'll encounter brief ads to assist Boca En
              Boca in connecting Employers with Job Seekers. Upgrade to our
              Annual Subscription plan to enjoy an ad-free experience throughout
              the app.
            </p>
            <span className="text-xl font-bold text-orange-500">
              $9.99/Year
            </span>
            <button
              className="p-3 px-20 bg-[#404041] text-white font-bold rounded-full shadow-sm w-8/12 mb-3 hover:scale-95 hover:shadow-lg "
              onClick={toggleFormPayment}
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      <Modal
        // title="Basic Modal"
        open={paymentForm}
        onOk={closeModal}
        onCancel={closeModal}
        style={{ borderRadius: 50 }}
        width={900}
        footer={null}
      >
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 w-full">
          <div className=" lg:w-1/2  md:w-1/2 hidden lg:block md:block">
            <div className="flex space-x-3 items-center mb-5">
              <FaCheckCircle className="text-5xl text-gray-700" />
              <h3 className="text-lg font-extrabold  ">Subscribe Access</h3>
            </div>
            <span className="text-2xl font-extrabold text-orange-500">
              $ 9.99
            </span>
          </div>

          <div className="w-full space-y-3">
            <h3 className="text-lg font-extrabold mt-3 mb-2 ">Pay with card</h3>
            <div>
              <label className="font-bold">Email</label>
              <input
                type="text"
                className="rounded-full outline-none border-gray-500 border-2 p-2 w-full h-auto "
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="font-bold ">Card Information</label>
              <div className="rounded-full outline-none border-gray-500 border-2 p-2 w-full h-auto flex">
                <input
                  type="text"
                  className="rounded-full outline-none  w-2/3 h-auto"
                  placeholder="1234-1234-1234"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                />
                <img src={card} alt="cardlogo" className="ml-auto" />
              </div>
              <div className="mt-2 flex space-x-2">
                <input
                  type="text"
                  className="rounded-full outline-none border-gray-500 border-2 p-2  w-1/2 h-auto"
                  placeholder="MM-YYYY"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                />
                <div className="rounded-full outline-none border-gray-500 border-2 p-2 w-1/2 h-auto flex ">
                  <input
                    type="text"
                    className="rounded-full outline-none  w-2/3 h-auto"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="cvv"
                  />
                  <CiCreditCard1 className="text-2xl ml-auto" />
                </div>
              </div>
            </div>

            <div>
              <label className="font-bold">Name on card</label>
              <input
                type="text"
                className="rounded-full outline-none border-gray-500 border-2 p-2 w-full h-auto "
                value={formData.cardHolderName}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <label className="font-bold">Billing Address</label>
              <select
                className="rounded-full outline-none border-gray-500 border-2 p-2 w-full h-auto"
                // value={formData.country}
                // onChange={handleSelectChange}
              >
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
              </select>
              <input
                type="text"
                className="rounded-full outline-none border-gray-500 border-2 p-2 w-full h-auto "
                placeholder="Address Line 1"
                value={formData.billingAddress}
                onChange={handleInputChange}
              />
              <input
                type="text"
                className="rounded-full outline-none border-gray-500 border-2 p-2 w-full h-auto "
                placeholder="Address Line 2"
                value={formData.addressLinetwo}
                onChange={handleInputChange}
              />
              <div className="mt-2 flex space-x-2">
                <input
                  type="text"
                  className="rounded-full outline-none border-gray-500 border-2 p-2  w-1/2 h-auto"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="rounded-full outline-none border-gray-500 border-2 p-2  w-1/2 h-auto"
                  placeholder="Zip"
                  value={formData.zip}
                  onChange={handleInputChange}
                />
              </div>
              <input
                type="text"
                className="rounded-full outline-none border-gray-500 border-2 p-2 w-full h-auto "
                placeholder="state"
                value={formData.state}
                onChange={handleInputChange}
              />
              <button
                className="rounded-full bg-[#404041] text-white font-bold   border-2 p-2 w-full h-auto "
                onClick={handleFormSubmit}
              >
                Pay $6.99
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        // title="Basic Modal"
        open={submitModal}
        onCancel={() => setSubmitModal(false)}
        style={{ borderRadius: 50 }}
        width={580}
        footer={null}
      >
        <div className="flex flex-col space-y-5 items-center text-center">
          <p className="text-lg font-extrabold textgray-700  px-14 py-4 lg:text-2xl md:text-2xls">
            Thank you for your support in helping us to connect Employers with
            Job Seekers.
          </p>
          <img src={BigLogo} alt="logo" className="w-full h-full px-16 py-5" />
          <button
            className="p-3 bg-[#404041] text-white font-bold rounded-full shadow-sm   hover:scale-95 hover:shadow-lg w-10/12"
            onClick={() => setSubmitModal(false)}
          >
            Continue
          </button>
        </div>
      </Modal>
    </>
  );
};

export default SubscriptionMain;
