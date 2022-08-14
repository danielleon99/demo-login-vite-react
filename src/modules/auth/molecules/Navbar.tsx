import React, { FC } from "react";
import { changeLang, langSelector } from "../../../i18n/slices";
import { useAppDispatch } from "../../app/store";
import { useSelector } from 'react-redux';
import { i18n } from "../../../i18n";

type Props = {
  transparent?: boolean
}

export const Navbar: FC<Props> = ({transparent}) => {

  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const dispatch = useAppDispatch();
  const {selectedLang} = useSelector(langSelector);
  
  return (
    <nav
      className={
        (transparent
          ? "top-0 absolute z-50 w-full"
          : "relative shadow-lg bg-white") +
        " flex flex-wrap items-center justify-between px-2 py-3 "
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className={
              (transparent ? "text-white" : "text-gray-800") +
              " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            }
            href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
          >
            Tailwind Starter Kit
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className={
              (transparent ? "text-white" : "text-gray-800") +
              " fas fa-bars"
            } />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="flex items-center">
              <a
                className={
                  (transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/login"
              >
                <i
                  className={
                    (transparent
                      ? "lg:text-gray-300 text-gray-500"
                      : "text-gray-500") +
                    " far fa-file-alt text-lg leading-lg mr-2"
                  }
                />        
                {i18n.t("doc", {language: selectedLang})}
              </a>
            </li>
          </ul>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">          
            <div className="mr-3">                    
              <select onChangeCapture={({target}: any) => dispatch(changeLang(target[target.options.selectedIndex].value))} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="es-ES">Español</option>
                <option value="en-EN">Ingles</option>
              </select> 
            </div>       
            <li className="flex items-center">    
              <a href="#" className="hover:scale-125 hover:z-10 transform ease-in-out transition duration-500 mr-3">
                <img className="inline-block h-10 w-10 rounded-full object-cover ring-2 transform ease-in-out transition duration-500 hover:ring-sky-400 ring-white" src="../../src/assets/images/no_user.png" alt="Guy"/>     
              </a>
              <span className="text-cyan-50">User</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
