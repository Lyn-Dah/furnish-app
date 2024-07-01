import { HeartHandshake } from "lucide-react";
import K from "../../../constants";

const Services = () => {
  return (
    <div className="grid grid-cols-4 gap-x-4 mt-3 pl-2 pr-2">
      {K.SERVICES.map(
          (service,index) => {
            return <div key={index}>
              <span><HeartHandshake />
              </span>
              <h3>{service.tittle} </h3>
              <p>{service.description}</p>
            </div>
          }
        )
      }
    </div>
  )
}

export default Services;