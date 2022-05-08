
import { Store, NOTIFICATION_TYPE } from 'react-notifications-component';

export default function useNotifications() {

    const showNotifications = (title: string,  type: NOTIFICATION_TYPE, message: string='', )=>{

        Store.addNotification({
            title: title,
            message: message,
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
