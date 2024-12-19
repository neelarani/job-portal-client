import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const job = useLoaderData();
  const { _id, title, company } = job;

  return (
    <div>
      <h2>Job Details for {title}</h2>
      <p>apply for: {company}</p>
      <Link to={`/jobApply/${_id}`}>
        <button className="btn btn-primary">Apply</button>
      </Link>
    </div>
  );
};

export default JobDetails;
