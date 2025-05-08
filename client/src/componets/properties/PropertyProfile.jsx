import axios from "axios";
import { useState, useEffect } from "react";
import { useRouteLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import "./PropertyProfile.css";




function PropertyProfile(){
    const data = useRouteLoaderData("id")
    console.log("foo yoo", data)

    function handleModal(){
      <Modal open={true} />
      console.log("some thing")
    }

    return <>
    <div id="properties">
      <div className="properties-.image">
        <div className="properties-.image-items1">
          <a href={"/" + data.image_urls.main}> <img src={data.image_urls.main} alt="" /></a>
        </div>

        <div className="properties-.image-items">
              <a href={data.image_urls.all[0]} > <img src={data.image_urls.all[0]} alt="realestate property image" /> </a>  
              <a href={data.image_urls.all[1]} > <img src={data.image_urls.all[1]} alt="realestate property image" /> </a> 
              <a href={data.image_urls.all[2]} > <img src={data.image_urls.all[2]} alt="realestate property image"/> </a>  
              <a href={data.image_urls.all[3]} > <img src={data.image_urls.all[3]} alt="realestate property image" /> </a> 
        </div>
      </div>
      <div className="properties-detail-grid">
        <div className="properties-details">
          <h1>${data.price}</h1>
          <div className="properties-details-detail">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
              <div className="properties-detail-items"> 
                <div className="properties-detail-item">
                  <div className="propeties-icons bed">
                    <svg className="properties-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 2H0V14H2V12H14V14H16V9C16 7.34315 14.6569 6 13 6H6C6 4.89543 5.10457 4 4 4H2V2Z" fill="#ffffff"></path> </g></svg>
                    <h3 style={{color: "lightgreen"}} >{data.features.bed}<p>Beds</p> </h3>
                  </div>
                </div>
                <div className="properties-detail-item">
                  <div className="propeties-icons shower">
                    <svg className="properties-icon"  fill="#ffffff" viewBox="0 0 512 512" id="Layer_1" enableBackground="new 0 0 512 512" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="m496 288c-38.154 0-437.487 0-448 0v-56h32c8.837 0 16-7.164 16-16v-40c0-8.836-7.163-16-16-16s-16 7.164-16 16v24h-16v-138.745c0-25.903 31.562-39.064 49.941-20.686l16.94 16.94c-13.424 23.401-10.164 53.835 9.805 73.805l8 8c6.247 6.248 16.379 6.249 22.627 0l64-64c6.249-6.248 6.249-16.379 0-22.627l-8-8c-20.35-20.351-50.837-23.06-73.817-9.817l-16.928-16.928c-11.57-11.57-26.952-17.942-43.313-17.942-33.776 0-61.255 27.479-61.255 61.255v226.745c-8.837 0-16 7.164-16 16s7.163 16 16 16v32c0 43.889 19.742 83.247 50.806 109.681l-22.338 23.229c-9.803 10.193-2.445 27.09 11.53 27.09 4.199 0 8.394-1.644 11.534-4.91l26.218-27.263c19.844 10.326 42.376 16.173 66.25 16.173h192c23.874 0 46.406-5.847 66.25-16.173l26.218 27.263c6.106 6.35 16.234 6.585 22.623.442 6.369-6.125 6.566-16.254.441-22.623l-22.338-23.229c31.064-26.433 50.806-65.791 50.806-109.68v-32c8.837 0 16-7.164 16-16s-7.163-16-16-16zm-310.89-223.738-40.845 40.845c-8.246-11.427-7.23-27.515 3.048-37.794 10.378-10.377 26.461-11.259 37.797-3.051zm278.89 287.738c0 61.757-50.243 112-112 112h-192c-61.757 0-112-50.243-112-112v-32h416z"></path> </g> </g></svg>
                    <h3 style={{color: "lightgreen"}} >{data.features.bathroom} <p>Bathroom</p></h3>
                  </div>
                </div>
                <div className="properties-detail-item">
                  <div className="propeties-icons area">
                    <svg className="properties-icon"  viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#242323"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.9120000000000001"></g><g id="SVGRepo_iconCarrier"> <path d="M6 6L3 3V21H21L18 18M6 6L9 9M6 6L5 7M9 9L12 12M9 9L8 10M12 12L15 15M12 12L11 13M15 15L14 16M15 15L18 18M18 18L17 19M6 12V18H12L6 12Z" stroke="#ffffff" strokeWidth="0.624" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    <h3 style={{color: "lightgreen"}}>{data.features.area}<p>Sqft</p></h3>
                  </div>
                </div>
              </div>
          </div>

          <div className="properties-moreDetial">
            <div className="properties-moreDetial-items">
              <svg className="properties-icon"  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path style={{fill: '#ffffff'}} d="M493.481,441.191H478.23V173.208c0-9.804-8.715-18.519-18.519-18.519H323.54v-102.4 c0-9.804-8.715-18.519-18.519-18.519h-153.6c-9.804,0-18.519,8.715-18.519,18.519v205.889H52.289 c-9.804,0-18.519,8.715-18.519,18.519v164.494H18.519C8.715,441.191,0,449.906,0,459.711s8.715,18.519,18.519,18.519h33.77h99.132 h154.689h153.6h33.77c9.804,0,18.519-8.715,18.519-18.519S503.285,441.191,493.481,441.191z M70.809,295.217h62.094v145.974 H70.809V295.217z M247.285,441.191v-72.987c0-9.804-8.715-18.519-18.519-18.519c-9.804,0-18.519,8.715-18.519,18.519v72.987 H169.94V276.698V70.809h116.562v370.383H247.285z M324.63,441.191V191.728h116.562v249.464H324.63z"></path> </g> </g> </g></svg>
              <h4>Condominum apprtment</h4>
            </div>
            <div className="properties-moreDetial-items">
              <svg className="properties-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)" stroke="#ffffff" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.096"></g><g id="SVGRepo_iconCarrier"><path d="M22.703 19.288c-.935-1.264-2.782-3.252-4.92-5.555-2.09-2.249-4.457-4.797-6.346-7.087a2.93 2.93 0 0 1-.786-1.12 5.382 5.382 0 0 0-.173-1.006c-.017-.066-.037-.143-.047-.198a6.194 6.194 0 0 1 2.382-1.187 19.86 19.86 0 0 1 3.198-.407l1.09-.041-1.085-1.168-.148-.035a19.403 19.403 0 0 0-4.05-.474 10.466 10.466 0 0 0-6.643 2.214c-.012.01-1.18 1.116-1.09 1.912.056.503-.117.63-.578.971a1.695 1.695 0 0 0-.367.326 3.017 3.017 0 0 0-2.78 1.2 1.183 1.183 0 0 0-.34 1.093 4.648 4.648 0 0 0 1.801 2.47c1.05.5 2.276-.22 3.363-1.986a2.012 2.012 0 0 1 1.194-.928 10.552 10.552 0 0 1 1.995.676 1.069 1.069 0 0 0 .267.078c3.227 3.888 5.417 6.943 7.015 9.175 1.102 1.537 1.898 2.648 2.598 3.436l.717.807a1.63 1.63 0 0 0 1.144.542l.067.001a1.637 1.637 0 0 0 1.119-.445l1.218-1.155a1.6 1.6 0 0 0 .185-2.109zM6.347 7.283a2.925 2.925 0 0 0-2.014 1.402c-.571.929-1.464 1.9-2.063 1.618a3.886 3.886 0 0 1-1.266-1.762c-.013-.127.024-.163.047-.184.895-.855 1.123-1.004 2.012-.927a.892.892 0 0 0 .656-.219c.129-.112.26-.209.384-.3a1.846 1.846 0 0 0 .978-1.865 3.017 3.017 0 0 1 .75-1.067 9.561 9.561 0 0 1 5.987-1.969c.423 0 .84.02 1.234.052-.156.03-.31.063-.464.098A7.245 7.245 0 0 0 9.74 3.595a1.012 1.012 0 0 0-.232 1.17 4.357 4.357 0 0 1 .145.834 2.52 2.52 0 0 0 .605 1.228 7.769 7.769 0 0 0-.68.47 5.773 5.773 0 0 0-.828.735h-.002a8.124 8.124 0 0 0-2.401-.75zm15.482 13.389l-1.217 1.154a.601.601 0 0 1-.457.17.622.622 0 0 1-.437-.206L19 20.983c-.666-.75-1.49-1.899-2.533-3.355-1.577-2.2-3.732-5.204-6.889-9.023a6.001 6.001 0 0 1 .607-.516 6.23 6.23 0 0 1 .742-.502c1.837 2.208 4.103 4.654 6.122 6.827 2.118 2.28 3.947 4.25 4.848 5.468a.6.6 0 0 1-.069.79z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>              
              <h4>Built In 1995</h4>
            </div>
            <div className="properties-moreDetial-items">
              <svg  className="properties-icon" fill="#ffffff" viewBox="0 0 512 512" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" stroke="#ffffff" strokeWidth="0.00512"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Paint_Roller"> <g id="XMLID_244_"> <path d="M249,297.82c0-31.312-23.952-56.82-55.265-56.82h-57.783C108.485,241,85,218.686,85,191.22v-79.701 c0-26.645,19.797-48.565,45.404-50.647c0.327,0.143,0.596,0.267,0.596,0.375V69h24V34h-24v6.859 c-16,0.755-33.499,8.113-46.028,20.93C71.851,75.211,65,92.872,65,111.519v79.701C65,229.673,97.499,261,135.952,261h57.783 C214.061,261,229,277.494,229,297.82V338h-11v52h45v-52h-14V297.82z" id="XMLID_268_"></path> <rect height="99" id="XMLID_275_" width="141" x="240" y="2"></rect> <path d="M194.467,101H220V2h-25.533C184.512,2,175,10.029,175,19.985v4.31v53.879v4.31 C175,92.44,184.512,101,194.467,101z" id="XMLID_331_"></path> <path d="M429.381,2H400v99h29.381C439.337,101,446,92.44,446,82.485v-62.5C446,10.029,439.337,2,429.381,2z" id="XMLID_355_"></path> <path d="M387.628,121H304v59.545c0,9.361,8.256,16.977,17.595,16.977c9.339,0,17.266-7.616,17.266-16.977 c0-5.502,4.068-9.963,9.57-9.963c5.502,0,9.57,4.46,9.57,9.963v32.328c0,9.361,7.161,16.977,16.5,16.977s16.5-7.616,16.5-16.977 v-91.442c0,0.033,0.334,0.318-0.002,0.318C389.43,121.749,388.948,122,387.628,121z" id="XMLID_356_"></path> <path d="M218,487.658c0,12.333,10.168,22.365,22.499,22.365c12.333,0,22.501-10.033,22.501-22.365V410h-45 V487.658z" id="XMLID_357_"></path> </g> </g> <g id="Layer_1"></g> </g></svg>              
              <h4>Reainvated</h4>
            </div>
            <div className="properties-moreDetial-items">
              <svg className="properties-icon" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="1.296"></g><g id="SVGRepo_iconCarrier"> <title>building_2_fill</title> <g id="页面-1" strokeWidth="0.00024000000000000003" fill="none" fillRule="evenodd"> <g id="Building" transform="translate(-288.000000, -48.000000)" fillRule="nonzero"> <g id="building_2_fill" transform="translate(288.000000, 48.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fillRule="nonzero"> </path> <path d="M3,19 L4,19 L4,6.3602 C4,5.71455 4.41315,5.14135 5.02566,4.93717 L13.0257,2.27051 C13.997,1.94674 15,2.6697 15,3.69353 L15,19 L16,19 L16,9.99027 C16,9.67475 16.2887,9.4381 16.5981,9.49998 L18.7941,9.9392 C19.4953,10.0794 19.9999,10.695 19.9999,11.4101 L19.9999,19 L21,19 C21.5523,19 22,19.4477 22,20 C22,20.5523 21.5523,21 21,21 L3,21 C2.44772,21 2,20.5523 2,20 C2,19.4477 2.44772,19 3,19 Z" id="路径" fill="#ffffff"> </path> </g> </g> </g> </g></svg>              
              <h4>Realestate</h4>
            </div>
            <div className="properties-moreDetial-items">
              <svg className="properties-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 6V18.5C2 19.9045 2 20.6067 2.33706 21.1111C2.48298 21.3295 2.67048 21.517 2.88886 21.6629C3.39331 22 4.09554 22 5.5 22C6.90446 22 7.60669 22 8.11114 21.6629C8.32952 21.517 8.51702 21.3295 8.66294 21.1111C9 20.6067 9 19.9045 9 18.5V11C9 10.0572 9 9.58579 9.29289 9.29289C9.58579 9 10.0572 9 11 9H18.5C19.9045 9 20.6067 9 21.1111 8.66294C21.3295 8.51702 21.517 8.32952 21.6629 8.11114C22 7.60669 22 6.90446 22 5.5C22 4.09554 22 3.39331 21.6629 2.88886C21.517 2.67048 21.3295 2.48298 21.1111 2.33706C20.6067 2 19.9045 2 18.5 2H6C4.11438 2 3.17157 2 2.58579 2.58579C2 3.17157 2 4.11438 2 6Z" stroke="#ffffff" strokeWidth="0.8879999999999999" strokeLinecap="round"></path> <path opacity="0.5" d="M12 2L12 4M18 2L18 4M9 2L9 5M15 2L15 5" stroke="#ffffff" strokeWidth="0.8879999999999999" strokeLinecap="round"></path> <path opacity="0.5" d="M2 12H4M2 18H4M2 15L5 15M2 9L5 9" stroke="#ffffff" strokeWidth="0.8879999999999999" strokeLinecap="round"></path> </g></svg>              
              <h4>234 Sqft</h4>
            </div>
            <div className="properties-moreDetial-items">
              <svg className="properties-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path style={{fill: '#ffffff'}} d="M493.481,441.191H478.23V173.208c0-9.804-8.715-18.519-18.519-18.519H323.54v-102.4 c0-9.804-8.715-18.519-18.519-18.519h-153.6c-9.804,0-18.519,8.715-18.519,18.519v205.889H52.289 c-9.804,0-18.519,8.715-18.519,18.519v164.494H18.519C8.715,441.191,0,449.906,0,459.711s8.715,18.519,18.519,18.519h33.77h99.132 h154.689h153.6h33.77c9.804,0,18.519-8.715,18.519-18.519S503.285,441.191,493.481,441.191z M70.809,295.217h62.094v145.974 H70.809V295.217z M247.285,441.191v-72.987c0-9.804-8.715-18.519-18.519-18.519c-9.804,0-18.519,8.715-18.519,18.519v72.987 H169.94V276.698V70.809h116.562v370.383H247.285z M324.63,441.191V191.728h116.562v249.464H324.63z"></path> </g> </g> </g></svg>
              <h4>condominum apprtment</h4>
            </div>
          </div>

        <div className="proprties-special">
          <h2>What's special</h2>
          <div>
            <div className="proprties-special-btns">
              <button>some</button>
              <button>some</button> 
              <button>some</button>           
            </div>
            <div className="proprties-special-paragraph">
                <p> Here's some Lorem Ipsum for you:
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    I hope this helps! Let me know if you'd like more.
                </p>
            </div>

          </div>
        </div>

        <div className="properties-locaton">
          <img src="/inBuild.jpg" alt="" />
        </div>

        </div>
        <div className="properties-deal">
                <Button className="properties-deal-btn">Request a Tour</Button>
                <Button className="properties-deal-btn">Call Us</Button>
          </div>
      </div>

    </div>
    </>
}

export const sendRequest = async({params}) => {
    try{ 
        const URL = import.meta.env.VITE_SERVER_URL;
        const response = await axios.post( URL + "database/properties", {schema: "properties", filter: {_id: params.id}, selection: undefined, condition: undefined, quantity:1});
        console.log(response.data);
        return response.data
    }
    catch (err){
        return err
    }
}

export default PropertyProfile

