import React, { useState } from "react";
import drawerImg from "../assets/drawers.jpg";
import avatarImg from "../assets/avatar-michelle.jpg";
import shareIcon from "../assets/icon-share.svg";
import facebookIcon from "../assets/icon-facebook.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import pinterestIcon from "../assets/icon-pinterest.svg";

const Article = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);

  return (
    <div className="bg-white flex flex-col md:flex-row md:max-w-3xl rounded-lg shadow-lg max-w-sm z-10 overflow-visible">
      <div className="w-full md:w-1/3 h-48 md:h-auto overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg shrink-0">
        <img className="w-full h-full object-cover" src={drawerImg} />
      </div>

      <main className="flex-1 overflow-visible">
        <div className="p-6">
          <h1 className="text-very-dark-grayish-blue text-lg mb-3 font-bold">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p className="text-grayish-blue text-md">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room feel complete.
          </p>
        </div>

        <footer
          className={`px-6 py-4 h-20 flex items-center justify-between md:hidden transition-colors${isShareOpen ? " bg-very-dark-grayish-blue " : ""}`}
        >
          {!isShareOpen ? (
            <>
              <div className="flex items-center gap-3">
                <img className="w-10 h-10 rounded-full" src={avatarImg} />
                <div>
                  <p className="text-md font-bold">Michelle Appleton</p>
                  <p className="text-grayish-blue text-md">28 Jun 2020</p>
                </div>
              </div>
              <div
                onClick={() => setIsShareOpen(true)}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-light-grayish-blue cursor-pointer"
              >
                <img className="w-4" src={shareIcon} />
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-4">
                <span className="text-light-grayish-blue tracking-[4px] text-sm">
                  SHARE
                </span>
                <img className="w-4" src={facebookIcon} />
                <img className="w-4" src={twitterIcon} />
                <img className="w-4" src={pinterestIcon} />
              </div>
              <div
                onClick={() => setIsShareOpen(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white cursor-pointer"
              >
                <img className="w-4" src={shareIcon} />
              </div>
            </>
          )}
        </footer>

        <footer className="px-6 pb-6 hidden md:block overflow-visible">
          <div className="mt-4 flex items-center justify-between relative">
            <div className="flex items-center gap-3">
              <img className="w-10 h-10 rounded-full" src={avatarImg} />
              <div>
                <p className="text-md font-bold">Michelle Appleton</p>
                <p className="text-grayish-blue text-md">28 Jun 2020</p>
              </div>
            </div>
            <div
              onClick={() => setIsShareOpen(!isShareOpen)}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-light-grayish-blue cursor-pointer"
            >
              <img className="w-4" src={shareIcon} />
            </div>
            {isShareOpen && (
              <div className="absolute bottom-[calc(100%+14px)] -right-20 bg-very-dark-grayish-blue rounded-lg px-6 py-3 flex items-center gap-4 shadow-lg z-50">
                <span className="text-light-grayish-blue tracking-[4px] text-sm">
                  SHARE
                </span>
                <img className="w-4" src={facebookIcon} />
                <img className="w-4" src={twitterIcon} />
                <img className="w-4" src={pinterestIcon} />
                <div className="absolute -bottom-1.5 right-23 w-3.5 h-3.5 bg-very-dark-grayish-blue rotate-45" />
              </div>
            )}
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Article;
