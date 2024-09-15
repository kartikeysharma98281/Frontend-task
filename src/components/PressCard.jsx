

import PropTypes from 'prop-types';

export function PressCard({imgURL, iconURL, title, source, date, description}) {
    return <div className="card bg-base-100 w-[351px] shadow-xl border hover:-translate-y-1 hover:scale-130" >
    <figure>
      {imgURL && <img
        src={imgURL}
        alt="" 
            className="rounded"
        />}
    </figure> 
    <div className="card-body flex flex-col items-start m-[10px] ">
      <div className="card-title text-[17px] font-medium ">{title}...</div>
      <div className="pt-[8px] flex items-start gap-[5px]">
      <div className="flex gap-[5px] items-start">
        <div className="items-start">
            <img src={iconURL} />
        </div>
        <div className="font-normal text-sm ">{source}</div>
      </div>
      <div className="text-gray-400">.</div>
        <div className="font-normal text-gray-400 text-sm">{date}</div>
      </div>
      <div className="card-actions justify-end">
      {description}...
      </div>
    </div>
  </div>
}

PressCard.propTypes = {
  imgURL: PropTypes.string.isRequired,
  iconURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}