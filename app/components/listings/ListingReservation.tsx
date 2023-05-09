'use client';

import { Range } from "react-date-range";

import Button from "../Button";
import Calendar from "../inputs/Calendar";
import { TextField, TextareaAutosize } from "@mui/material";

interface ListingReservationProps {
  price: number;
  dateRange: Range,
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingReservation: React.FC<
  ListingReservationProps
> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates
}) => {
  return ( 
    <div 
      className="
        
        overflow-hidden
      "
    >
      <h1 className="mb-3 text-2xl font-bold text-slate-700 py-5 sm:text-3xl capitalize">Get in touch with us</h1>
      <div className="w-full relative mb-3">
        <TextField 
          required
          id="standard-basic" 
          label="Full Name" 
          variant="filled" 
          className="
            w-full
            font-light 
            bg-white 
            border-2
            rounded-md
            outline-none
            transition
            mb-3
          "
        />
      </div>
      <div className="w-full relative mb-3">
        <TextField 
          required
          id="standard-basic" 
          label="Email Address" 
          variant="filled"
          className="
            w-full
            font-light 
            bg-white 
            border-2
            rounded-md
            outline-none
            transition
            mb-3
          "
        />
      </div>
      <div className="w-full relative mb-3">
        <TextField 
          required
          id="standard-basic" 
          label="Object" 
          variant="filled"
          className="
            w-full
            font-light 
            bg-white 
            border-2
            rounded-md
            outline-none
            transition
            mb-3
          "
        />
      </div>
      <div className="w-full relative">
        <textarea
          className="
            w-full
            p-4
            pt-6 
            font-light 
            bg-white 
            border-2
            rounded-md
            outline-none
            transition
            mb-3
            resize-none
          "
          rows={4}
        >

        </textarea>
      </div>
      <hr />
      <div 
        className="
          p-4 
          flex 
          flex-row 
          items-center 
          justify-between
          font-semibold
          text-lg
        "
      >
        <div className="mx-auto items-center">
          <button 
            type="submit" 
            className="
              relative
              disabled:opacity-70
              disabled:cursor-not-allowed
              rounded-lg
              hover:opacity-80
              transition
              w-full
              bg-indigo-500
              text-white
              py-3
              px-32
            "
          >Send Message</button>
        </div>
      </div>
    </div>
   );
}
 
export default ListingReservation;