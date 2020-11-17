import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => 
{
    return { notifications: state.notifications };
};

function openPop()
{
    let el = document.getElementById('notification');

    if(el)
    {
        el.classList.add('showState');
    }
    setTimeout(function(){ closePop() }, 4000);
}

function closePop()
{
    let el = document.getElementById('notification');
    if (el) {
        el.classList.remove('showState');
        el.classList.add('hideState');
    }

}

const NotificationComponent = ({ notifications}) => (
    <div>
        {openPop()}
        { notifications.show &&
            <div id="notification" className="of-hid showState" onClick={closePop}>
                <div className="icon f-left">
                    <img src="./assets/images/favicon/Favicon-32px-X-32px.png" alt="HelloPay"/>
                </div>
                <div className="desc f-left">
                    <p>{notifications.message} Click to dismiss this message.</p>
                </div>                
            </div>
        }
    </div>
);

const Notification = connect(mapStateToProps)(NotificationComponent);

export default Notification;

