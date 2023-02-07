import { Checkbox } from '@mui/material';
import React, { useState } from 'react';
import MultipleSelect from '../../../components/Dropdown/multi-select';
import SingleSelect from '../../../components/Dropdown/single-select';
import CheckedIcon from '../../../components/Icons/checked-icon';
import IBriefIcon from '../../../components/Icons/i-brief-icon';
import TextFields from '../../../components/TextField';
import '../../../../styles/tooltip.css'
import UploadImage from '../../../components/UploadImage';
import { activeDatas, groupTypeDatas, locationDatas } from '../../../../constants';

const CreateEditGroup = ({ onClose }) => {
  const [data, setData] = useState([{ item: '' }]);

  return (
    <div>
      <div className='font-barlow font-semibold	 flex'>
        <p className='text-ct4-dark-green text-sm uppercase cursor-pointer' onClick={() => onClose()}>Groups</p>
        <div className='mx-3 text-xs text-ct4-gray'>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
        <p className='text-ct4-gray-3 text-sm uppercase'>Create a New Group</p>
      </div>
      <div className='mt-5 flex justify-between'>
        <p className='font-barlow font-bold uppercase text-28'>Create a new Group</p>
        <div>
          <button className='uppercase w-140 h-10 border border-ct4-border-gray font-barlow font-bold text-sm rounded mr-3' onClick={() => onClose()}>Cancel</button>
          <button className='uppercase w-140 h-10 bg-ct4-green-neon font-barlow font-bold text-sm rounded'>Save</button>
        </div>
      </div>
      <div className='mt-8 grid grid-cols-5'>
        <div className='grid gap-y-4 col-span-2' >
          <TextFields name='Group Name' required={true} width='600px' placeholder={'Group Name'} />
          <TextFields name='Description' required={false} width='600px' placeholder={'Description'} />
          <SingleSelect name='Location' required={true} width='600px' options={locationDatas} />
          <TextFields name='Website' required={false} width='600px' placeholder={'Website'} />
          <SingleSelect name='Group Type' required={true} width='600px' options={groupTypeDatas} />
          <MultipleSelect name='Sport' required={true} />
          <SingleSelect name='Active' required={true} width='600px' options={activeDatas} />
          <div className='-ml-3 font-barlow flex items-center'>
            <Checkbox checkedIcon={<CheckedIcon />} />
            <p className='mr-2'>Make your club invite-only?</p>
            <div className='tooltip cursor-pointer'>
              <IBriefIcon />
              <span className='tooltiptext-help-icon font-barlow px-6 pt-4 pb-6'>
                <div className='flex '>
                  <IBriefIcon stroke='#ffffff' />
                  <p className='font-semibold text-14 ml-2'>Invite-Only Group</p>
                </div>
                <div className='mt-4 '>
                  <p>Runners must request permission to join an invite-only Group.</p>
                  <p className='mt-4'>Only admins can approve new Group members. Recent activity, club announcements, discussions and private group events will be hidden from non-members.</p>
                </div>
              </span>
            </div>
          </div>
        </div>
        <UploadImage />
      </div>
    </div>
  )
};

export default CreateEditGroup;