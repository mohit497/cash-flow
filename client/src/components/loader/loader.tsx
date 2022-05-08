import { Spinner } from "react-bootstrap";
import './loader.scss'

export default  function Loading(){
  
      return (
        <div
          id="loader"
          className="modal-backdrop show"
        >
          <Spinner
            className="logo"
            animation="grow"
            variant="primary"
            role="status"
          >
            <span  className="sr-only">Loading...</span>
          </Spinner>
        </div>
      );
  }