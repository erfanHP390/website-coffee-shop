"use client";
import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import styles from "./CommentForm.module.css";
import { swalAlert, toastError, toastSuccess } from "@/utils/alerts";
import { validateEmail } from "@/utils/auth";
import Loading from "@/app/loading";

function CommentForm({ productId }) {
  const [username, setUserName] = useState("");
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");
  const [score, setScore] = useState(0);
  const [productID, setProductID] = useState(productId);
  const [hoverRating, setHoverRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleStarClick = (rating) => {
    setScore(rating);
  };

  const handleStarHover = (rating) => {
    setHoverRating(rating);
  };

  const handleStarLeave = () => {
    setHoverRating(0);
  };

  const addComment = async () => {
    if (!email || !username || !content || !score) {
      setIsLoading(false);
      return swalAlert("لطفا اطلاعات لازم  را وارد نمایید", "error", "فهمیدم");
    }

    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      setIsLoading(false);
      return swalAlert("لطفا ایمیل معتبر وارد نمایید", "error", "فهمیدم");
    }

    const newComment = {
      username,
      content,
      email,
      score,
      productID,
    };

    const res = await fetch("/api/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    });

    if (res.status === 201) {
      setUserName("");
      setContent("");
      setEmail("");
      setScore(0);
      setIsLoading(false);
      toastSuccess(
        "نظر شما ثبت شد ، پس از بررسی و تایید نمایش داده خواهد شد",
        "bottom-center",
        5000,
        false,
        true,
        true,
        true,
        undefined,
        "colored"
      );
    } else if (res.status === 400) {
      setUserName("");
      setContent("");
      setEmail("");
      setScore(0);
      setIsLoading(false);
      toastError(
        "لطفا ایمیل خود را وارد نمایید",
        "top-center",
        5000,
        false,
        true,
        true,
        true,
        undefined,
        "colored"
      );
    } else if (res.status === 422) {
      setUserName("");
      setContent("");
      setEmail("");
      setScore(0);
      setIsLoading(false);
      toastError(
        "لطفا ایمیل معتبر وارد نمایید",
        "top-center",
        5000,
        false,
        true,
        true,
        true,
        undefined,
        "colored"
      );
    } else if (res.status === 500) {
      setUserName("");
      setContent("");
      setEmail("");
      setScore(0);
      setIsLoading(false);
      toastError(
        "خطا در سرور لطفا پس از چند دقیقه دوباره تلاش نمایید",
        "top-center",
        5000,
        false,
        true,
        true,
        true,
        undefined,
        "colored"
      );
    }
  };

  return (
    <>
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          {" "}
          <div className={`container mt-5 ${styles.commentFormContainer}`}>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className={`card shadow ${styles.commentCard}`}>
                  <div
                    className={`card-header text-center ${styles.cardHeader} font_vazir_Bold`}
                  >
                    <h4 className="mb-0">فرم ثبت نظر</h4>
                  </div>
                  <div className="card-body">
                    <form className="font_vazir_Regular">
                      <div className="form-group mb-3">
                        <label
                          htmlFor="name"
                          className={`form-label ${styles.formLabel}`}
                        >
                          نام و نام خانوادگی
                        </label>
                        <input
                          type="text"
                          className={`form-control ${styles.formControl}`}
                          id="name"
                          name="name"
                          value={username}
                          onChange={(event) => setUserName(event.target.value)}
                          required
                        />
                      </div>

                      <div className="form-group mb-3">
                        <label
                          htmlFor="email"
                          className={`form-label ${styles.formLabel}`}
                        >
                          آدرس ایمیل
                        </label>
                        <input
                          type="email"
                          className={`form-control ${styles.formControl}`}
                          id="email"
                          name="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          required
                        />
                      </div>

                      <div className="form-group mb-3">
                        <label className={`form-label ${styles.formLabel}`}>
                          امتیاز
                        </label>
                        <div className={styles.starsContainer}>
                          <div className={styles.starsWrapper}>
                            {[1, 2, 3, 4, 5].map((star) => (
                              <span
                                key={star}
                                className={styles.star}
                                onClick={() => handleStarClick(star)}
                                onMouseEnter={() => handleStarHover(star)}
                                onMouseLeave={handleStarLeave}
                              >
                                {(hoverRating || score) >= star ? (
                                  <FaStar className={styles.filledStar} />
                                ) : (
                                  <FaRegStar className={styles.emptyStar} />
                                )}
                              </span>
                            ))}
                          </div>
                          <div className={styles.ratingText}>
                            <span className={styles.currentRating}>
                              {score}
                            </span>
                            <span className={styles.maxRating}>/5</span>
                          </div>
                        </div>
                      </div>

                      <div className="form-group mb-4">
                        <label
                          htmlFor="comment"
                          className={`form-label ${styles.formLabel}`}
                        >
                          متن نظر
                        </label>
                        <textarea
                          className={`form-control ${styles.formControl} ${styles.commentTextarea}`}
                          id="comment"
                          name="comment"
                          rows="5"
                          value={content}
                          onChange={(event) => setContent(event.target.value)}
                          required
                        ></textarea>
                      </div>

                      <div className="d-grid">
                        <button
                          type="submit"
                          onClick={(event) => {
                            event.preventDefault();
                            setIsLoading(true);
                            addComment();
                          }}
                          className={`btn ${styles.submitButton} font_vazir_Medium`}
                        >
                          ثبت نظر
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default CommentForm;
