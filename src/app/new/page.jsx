"use client";
import { Parent } from "@/compenens/page";
import { useState, useEffect } from "react";
const NewPostCreater = () => {
  const [ho, setHo] = useState("");
  const [error, setError] = useState(false);
  const [ho2, setHo2] = useState("");
  const [error2, setError2] = useState(false);
  const check = () => {
    if (ho == "") {
      setError(true);
      console.log("hihi");
    } else {
      setError(false);
      console.log("hi");
    }
    if (ho2 !== "") {
      if (ho !== "") {
  alert('done')
      }
    }
  };
  const check2 = () => {
    if (ho2 == "") {
      setError2(true);
      console.log("hihi");
    } else {
      setError2(false);
      console.log("hi");
    }
    if (ho2 !== "") {
      if (ho !== "") {
  alert('done')
      }
    }
  };

  return (
    <Parent>
      <div>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
       
<div class="input-container">
<input onChange={(e) => setHo(e.target.value)} type="text" />
  <label for="input" class="label">Your title</label>
  <div class="underline"></div>
</div>

       
          <div style={{display:'flex', justifyContent:'center'}}>
            {error ? (
              <div class="popup-container">
                <div class="popup error-popup">
                  <div class="popup-icon error-icon">
                    <svg
                      class="error-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div class="error-message">Your title is empty</div>
                  <div class="popup-icon close-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      class="close-svg"
                    >
                      <path
                        d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
                        class="close-path"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            ) : null} 
          </div>
          <button onClick={() => check()}>
  <a href="#" class="btn2"><span class="spn2">Done</span></a>
</button>
        </div>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
      
          <div class="input-container">
<input onChange={(e) => setHo2(e.target.value)} type="text" />
  <label for="input" class="label">Your description</label>
  <div class="underline"></div>
</div>
<div style={{display:'flex', justifyContent:'center'}}>
            {error2 ? (
              <div class="popup-container">
                <div class="popup error-popup">
                  <div class="popup-icon error-icon">
                    <svg
                      class="error-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div class="error-message">Your description is empty</div>
                  <div class="popup-icon close-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      class="close-svg"
                    >
                      <path
                        d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
                        class="close-path"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            ) : null} 
          </div>
     
         
          <button onClick={() => check2()}>
  <a href="#" class="btn2"><span class="spn2">Done</span></a>
</button>
        </div>
      </div>
    </Parent>
  );
};
export default NewPostCreater;
