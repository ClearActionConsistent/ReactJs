import { Checkbox } from '@mui/material';
import React from 'react';
import { black } from 'tailwindcss/colors';
import MultipleSelect from '../../../components/Dropdown/multi-select';
import SingleSelect from '../../../components/Dropdown/single-select';
import ActionIcon from '../../../components/Icons/action-icon';
import CheckedIcon from '../../../components/Icons/checked-icon';
import IBriefIcon from '../../../components/Icons/i-brief-icon';
import UploadImageIcon from '../../../components/Icons/upload-image-icon';
import PageLayout from '../../../components/PageLayout';
import TextFields from '../../../components/TextField';

const CreateEditGroup = () => {
  return (
    <div>
      <PageLayout>
        <div>
          <div className='font-barlow font-semibold	 flex'>
            <p className='text-ct4-dark-green text-sm uppercase'>Groups</p>
            <div className='mx-3 text-xs text-ct4-gray'>
              <i class="fa-solid fa-chevron-right"></i>           </div>
            <p className='text-ct4-gray-3 text-sm uppercase'>Create a New Group</p>
          </div>
          <div className='mt-5 flex justify-between'>
            <p className='font-barlow font-bold uppercase text-28'>Create a new Group</p>
            <div>
              <button className='uppercase w-140 h-10 border border-ct4-border-gray font-barlow font-bold text-sm rounded mr-3'>Cancel</button>
              <button className='uppercase w-140 h-10 bg-ct4-green-neon font-barlow font-bold text-sm rounded'>Save</button>
            </div>
          </div>
          <div className='mt-8 grid grid-cols-5'>
            <div className='grid gap-y-4 col-span-2' >
              <TextFields name='Group Name' required={true} width='600px' placeholder={'Group Name'} />
              <TextFields name='Description' required={false} width='600px' placeholder={'Description'} />
              <SingleSelect name='Location' required={true} width='600px' />
              <TextFields name='Website' required={false} width='600px' placeholder={'Website'} />
              <SingleSelect name='Group Type' required={true} width='600px' />
              <MultipleSelect name='Sport' required={true} />
              <SingleSelect name='Active' required={true} width='600px' />
              <div className='-ml-3 font-barlow flex items-center'>
                <Checkbox checkedIcon={<CheckedIcon />} />
                <p className='mr-2'>Make your club invite-only?</p>
                <IBriefIcon />
              </div>
            </div>
            <div className='text-sm font-barlow-regular col-span-2'>
              <p >Group Picture</p>
              <div className="flex items-center w-full mt-2 ">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-600 h-400 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <UploadImageIcon />
                    <p className='mt-6 font-barlow text-ct4-gray-3'>Maximum size is 2MB</p>
                    <div className='flex gap-x-1 mt-4'>
                      <p className='font-barlow underline text-ct4-dark-green'>Click to upload</p>
                      <p> or drag and drop.</p>
                    </div>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </div>
  )
};

export default CreateEditGroup;