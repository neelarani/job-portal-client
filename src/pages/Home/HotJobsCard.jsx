import { FaDollarSign, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HotJobsCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl m-8">
      <div className="flex gap-2 ">
        <figure>
          <img className="w-16" src={company_logo} />
        </figure>
      </div>
      <div>
        <h3 className="text-2xl">{company}</h3>
        <p className="flex gap-1 items-center justify-center">
          <FaMapMarkerAlt /> {location}
        </p>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>

        <p>{description}</p>
        <div className="flex gap-2 flex-wrap">
          {requirements.map((skill, index) => (
            <p
              key={index}
              className="border rounded-md hover:text-purple-600 hover:bg-gray-400"
            >
              {skill}
            </p>
          ))}
        </div>
        <div className="card-actions justify-end items-center mt-4">
          <p className="flex items-center">
            Salary:
            <FaDollarSign />
            {salaryRange.min} - {salaryRange.max}
            <span className="ml-1"> {salaryRange.currency}</span>
          </p>
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary">Apply</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobsCard;
