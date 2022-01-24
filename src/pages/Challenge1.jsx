import Button from '../components/challenge1/Button';

const Challenge1 = () => {
  return (
    <div className='flex flex-row'>
      <div className='w-2/12 bg-gray-50 flex flex-col items-center'>
        <div className='flex space-x-4 items-center py-4'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          <div className='font-black font-mono text-lg select-none'>
            <span className='text-orange-500'>Dev</span>
            <span>challenges</span>
            <span>.io</span>
          </div>
        </div>
      </div>
      <div className='w-10/12 py-4 px-8'>
        <div className='font-bold text-2xl text-gray-500 pb-12'>Button Component</div>
        <div className='space-y-12'>
          {/* Default Button */}
          <div className='flex space-x-16 items-center'>
            <div className='space-y-2'>
              <div className='text-xs font-semibold font-mono'>{`<Button />`}</div>
              <Button />
            </div>
            <div className='space-y-2'>
              <div className='text-xs font-semibold font-mono'>{`&:hover , &:focus`}</div>
              <Button />
            </div>
          </div>
          {/* Variant Outline */}
          <div className='flex space-x-16 items-center'>
            <div className='space-y-2'>
              <div className='text-xs font-semibold font-mono'>{`<Button variant="outline" />`}</div>
              <Button variant='outline' />
            </div>
            <div className='space-y-2'>
              <div className='text-xs font-semibold font-mono'>{`&:hover , &:focus`}</div>
              <Button variant='outline' />
            </div>
          </div>
          {/* Variant Text */}
          <div className='flex space-x-16 items-center'>
            <div className='space-y-2'>
              <div className='text-xs font-semibold font-mono'>{`<Button variant="text"/>`}</div>
              <Button variant='text' />
            </div>
            <div className='space-y-2'>
              <div className='text-xs font-semibold font-mono'>{`&:hover , &:focus`}</div>
              <Button variant='text' />
            </div>
          </div>
          {/* disableShadow */}
          <div className='flex space-x-16 items-center'>
            <div className='space-y-2'>
              <div className='text-xs font-semibold font-mono'>{`<Button disableShadow />`}</div>
              <Button disableShadow color='primary' />
            </div>
          </div>
          {/* disabled */}
          <div className='flex space-x-16 items-center'>
            <div className='space-y-2'>
              <div className='text-xs font-semibold font-mono'>{`<Button disabled/>`}</div>
              <Button disabled={true} />
            </div>
            <div className='space-y-2'>
              <div className='text-xs font-semibold font-mono'>{`<Button disabled variant='text'/>`}</div>
              <Button disabled variant='text' />
            </div>
          </div>
          {/* startIcon and endIcon */}
          <div className='flex space-x-16 items-center'>
            <div className='space-y-2'>
              <div className='text-xs font-semibold font-mono'>{`<Button startIcon="😁"/>`}</div>
              <Button startIcon="😁" color='primary' />
            </div>
            <div className='space-y-2'>
              <div className='text-xs font-semibold font-mono'>{`<Button endIcon="😎"/>`}</div>
              <Button endIcon="😎" color="primary" />
            </div>
          </div>
          {/* size */}
          <div className='flex space-x-16 items-center'>
            <div className='space-y-2'>
              <div className='text-xs font-semibold font-mono'>{`<Button size='sm'/>`}</div>
              <Button size='sm' color='primary' />
            </div>
            <div className='space-y-2'>
              <div className='text-xs font-semibold font-mono'>{`<Button size='md'/>`}</div>
              <Button size='md' color='primary' />
            </div>
            <div className='space-y-2'>
              <div className='text-xs font-semibold font-mono'>{`<Button size='lg'/>`}</div>
              <Button size='lg' color='primary' />
            </div>
            <div className='space-y-2'>
              <div className='text-xs font-semibold font-mono'>{`<Button size='xl'/>`}</div>
              <Button size='xl' color='primary' />
            </div>
          </div>
          {/* color */}
          <div className='flex space-x-16 items-center'>
            <div className='space-y-2'>
              <div className='text-xs font-semibold font-mono'>{`<Button color='danger'/>`}</div>
              <Button color='danger' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Challenge1;