import React, { useEffect, useState } from "react";
import ClientService from "../utils/ClientService";

import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import { FaPlusCircle, FaEye, FaRegEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const BalanceCard = ({ first, last }) => {
  const [amount, setAmount] = useState("");
  let navigate = useNavigate();
  const [balance, setBalance] = useState("");
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    ClientService.balance()
      .then((res) => {
        setBalance(res.data.result);
      })
      .catch((err) => {
        if (err.response.status === 500) {
          Swal.fire({
            icon: "warning",
            text: " session expired please login again",
          });
          navigate("/");
        } else if (err.response.data === 401) {
          Swal.fire({
            icon: "warning",
            text: err.response.data.message,
          });
          navigate("/");
        }
        Swal.fire({
          icon: "warning",
          text: err.response.data.message,
        });
        navigate("/wallet/setPin");
      });
    //eslint-disable-next-line
  }, []);

  const handleDeposit = (e) => {
    e.preventDefault();
    const param = { amount };
    ClientService.deposit(param)
      .then((res) => {
        window.location.replace(res.data.paymentLink);
      })
      .catch((err) => {
        console.log("errors from the deposit", err);
        window.location.reload();
      });
  };
  return (
    <Card className="p-4 shadow-md">
      <CardHeader
        color="orange"
        className="flex flex-col justify-start -mt-10 h-24 mb-4 px-8 py-4"
      >
        <h6 className="uppercase text-gray-200 text-xs font-medium mb-1">
          Welcome back
        </h6>
        <h2 className="text-white text-xl lg:text-2xl">
          {first} {last}
        </h2>

        <div className="flex justify-end">
          <input type="checkbox" id="click" className="hidden" />
          <label htmlFor="click">
            <FaPlusCircle className="cursor-pointer" />
          </label>
          <Card className="model p-4 h-auto">
            <CardBody>
              <form>
                <h6 className="text-orange-500 text-sm mt-3 mb-6 font-light uppercase">
                  Fund your wallet
                </h6>
                <div className="mt-10">
                  <div className="mb-10">
                    <input
                      className="w-full py-4 px-4 border border-grey-500 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none focus:outline-none"
                      placeholder="Amount"
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="click">
                      <button
                        className={`w-full px-6 py-4 rounded-xl bg-blue-500
                       transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800 text-white`}
                        onClick={handleDeposit}
                      >
                        Deposit
                      </button>
                    </label>
                  </div>
                </div>
              </form>
            </CardBody>
          </Card>
          <div className="overlay"></div>
        </div>
      </CardHeader>
      <CardBody>
        <div className="relative h-auto ">
          <div className="flex justify-between">
            <div className="lg:text-2xl">
              {display === false ? (
                new Intl.NumberFormat("ja-JP", {
                  style: "currency",
                  currency: "NGN",
                }).format(balance)
              ) : (
                <p>******</p>
              )}
            </div>
            <div>
              {display ? (
                <span onClick={() => setDisplay(false)}>
                  <FaRegEyeSlash className="cursor-pointer" />
                </span>
              ) : (
                <span onClick={() => setDisplay(true)}>
                  <FaEye className="cursor-pointer" />
                </span>
              )}
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default BalanceCard;
