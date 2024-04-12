import React from 'react';

const milestones = [
    {
        year: '2022',
        description: 'Secured funding for further expansion and product development',
      },
      {
        year: '2020',
        description: 'Recognized as one of the fastest-growing companies in the tech sector',
      },
      {
        year: '2018',
        description: 'Achieved $10 million in annual revenue',
      },
      {
        year: '2015',
        description: 'Expanded operations to international markets',
      }
//   {
//     year: '2012',
//     description: 'Launched our flagship product, revolutionizing the industry',
//   },
//   {
//     year: '2010',
//     description: 'Company founded by John Doe and Jane Smith',
//   },
];

const Timeline = () => {
  return (
    <div className="mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-6">Company Milestones</h2>
      <ul id="timeline" className="list-none flex gap-3">
        {milestones.map((milestone, index) => (
          <li key={index} className="work relative p-4 flex-1 bg-slate-900 rounded-md shadow-md">
            <input className="radio" id={`milestone${index + 1}`} name="milestones" type="radio" defaultChecked={index === 0} />
            <div className="relative">
              <label htmlFor={`milestone${index + 1}`} className="text-lg font-semibold">{`${milestone.year}: ${milestone.description}`}</label>
              <span className="date block text-sm">{milestone.year}</span>
              <span className="circle"></span>
            </div>
            <div className="content mt-8">
              <p className="text-lg">
                {milestone.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
