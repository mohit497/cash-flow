
import { Store, NOTIFICATION_TYPE } from 'react-notifications-component';

export default function useNotifications() {

    const showNotifications = (message: string, type: NOTIFICATION_TYPE )=>{

        Store.addNotification({
            title: message,
            message: "teodosii@react-notifications-component",
            type: type,
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });

    }

    return { showNotifications}

}
