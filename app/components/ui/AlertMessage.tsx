import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { FaExclamationCircle, FaExclamationTriangle, FaTimesCircle } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';

type AlertMessageProps = {
  errors: string[];
  variant?: string;
};

export default function AlertMessage({ errors, variant = 'danger' }: AlertMessageProps) {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert variant={variant} className={`bg-${variant}`}>
        <Alert.Heading className="d-flex justify-content-between">
          <div>
            <FaExclamationCircle size={24} className="mr-2" />
            Oops! Something went wrong.
          </div>
        </Alert.Heading>
        {/* display the error messages */}
        {errors.map((text, i) => (
          <div key={i}>
            <FaArrowRightLong className="mr-2" />
            {text}
          </div>
        ))}
      </Alert>
    );
  }
}
