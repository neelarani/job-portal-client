import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const AddJob = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleAddJob = e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    // console.log(formData.entries());
    const initialData = Object.fromEntries(formData.entries());
    // console.log(initialData);
    const { min, max, currency, ...newJob } = initialData;
    // console.log(newJob);
    newJob.salaryRange = { min, max, currency };
    newJob.requirments = newJob.requirments.split('\n');
    newJob.responsibilities = newJob.responsibilities.split('\n');
    console.log(newJob);

    fetch(`http://localhost:5000/jobs`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newJob),
    })
      .then(res => res.json())
      .then(data => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/postedJob');
      });
  };
  return (
    <div>
      <div className="text-3xl">Post a new Job</div>
      <form onSubmit={handleAddJob} className="card-body">
        {/* job title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            placeholder="job title"
            name="title"
            className="input input-bordered"
            required
          />
        </div>
        {/* job  location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Location</span>
          </label>
          <input
            type="text"
            placeholder="job location"
            name="location"
            className="input input-bordered"
            required
          />
        </div>
        {/* job Type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select
            defaultValue={'Pick a job type'}
            className="select select-ghost w-full max-w-xs"
          >
            <option disabled>Pick a job type</option>
            <option>Full-time</option>
            <option>Intern</option>
            <option>Part-time</option>
          </select>
        </div>

        {/* job Category */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Field</span>
          </label>
          <select
            defaultValue={'Pick a job Field'}
            className="select select-ghost w-full max-w-xs"
          >
            <option disabled>Pick a job Field</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Teaching</option>
          </select>
        </div>
        {/* salary range */}
        <p>Salary Range</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Max</span>
            </label>
            <input
              type="text"
              placeholder="Max"
              name="max"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Min</span>
            </label>
            <input
              type="text"
              placeholder="Min"
              name="min"
              className="input input-bordered"
              required
            />
          </div>
          {/* salary  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Salary Range</span>
            </label>
            <select
              defaultValue={'Currency'}
              name="currency"
              className="select select-ghost w-full max-w-xs"
            >
              <option disabled>Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
              <option>Teaching</option>
            </select>
          </div>
        </div>
        {/* Job Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Job Description"
            name="description"
            required
          ></textarea>
        </div>
        {/* Company Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input
            type="text"
            placeholder="company name"
            name="company"
            className="input input-bordered"
            required
          />
        </div>

        {/* job requirments */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Requirments</span>
          </label>
          <input
            type="text"
            placeholder="put each requirments in a new line"
            name="requirments"
            className="input input-bordered"
            required
          />
        </div>

        {/* responsibilities */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Responsibilities</span>
          </label>
          <input
            type="text"
            placeholder="write each rsesponsibility in a new line"
            name="responsibilities"
            className="input input-bordered"
            required
          />
        </div>
        {/* HR Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Name</span>
          </label>
          <input
            type="text"
            placeholder="HR Name"
            name="hr_name"
            className="input input-bordered"
            required
          />
        </div>

        {/* HR Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Name</span>
          </label>
          <input
            type="text"
            placeholder="HR Email"
            name="hr_email"
            defaultValue={user?.email}
            className="input input-bordered"
            required
          />
        </div>
        {/* application deadline */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            placeholder="Deadline"
            name="applicationDeadline"
            className="input input-bordered"
            required
          />
        </div>
        {/* Company logo url */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Name</span>
          </label>
          <input
            type="text"
            placeholder="Company Logo URL"
            name="company_logo"
            className="input input-bordered"
            required
          />
        </div>

        {/* submit btn */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
