import Identicon from 'identicon.js'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import "./TopFixedBar.css"
const TopFixedBar = ({account,children}) => {
    return (
        <div className="top_fixed">
            <div className="top_bar">
                <div className="search_bar">
                    <FaSearch/>
                    <input type="text" placeholder='Search Your Files...'/>
                    </div>
                    <div className="userAccount">
             
         
              <a target="_blank"
                 alt=""
                 className=""
                 rel="noopener noreferrer"
                 href={"https://etherscan.io/address/" + account}>
                {account.substring(0,6)}...{account.substring(38,42)}
              </a>
          
            { account
              ? <img
                  alt=""
                  className=''
                  width='30'
                  height='30'
                  src={`data:image/png;base64,${new Identicon(account, 30).toString()}`}
                />
              : <span></span>
            }
  
                    </div>
                </div>

                <div className='header_bar'>
             {children}
                </div>
</div>
    )
}

export default TopFixedBar
