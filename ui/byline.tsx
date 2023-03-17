import { VercelLogo } from '#/ui/vercelLogo';

export default function Byline({ className }: { className: string }) {
  return (
    <div
      className={`${className} inset-x-0 bottom-3 mx-3 rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20`}
    >
      <div className='flex flex-col justify-between space-y-2 rounded-lg bg-black p-3.5 lg:px-5 lg:py-3'>
        <div className='flex items-center gap-x-1.5'>
          <a href='https://upexpert.com.br' title='up.expert'>
            <div className='mx-8 w-16 text-gray-100 hover:text-gray-50'>
              <VercelLogo />
            </div>
          </a>
        </div>

        <div className='text-sm text-gray-400'>
          <a
            className='text-orange-500 hover:text-gray-400'
            href='https://upexpert.com.br'
            target='_blank'
            rel='noreferrer'
          >
            Marketing
          </a>
          {' / '}
          <a
            className='underline decoration-dotted underline-offset-4 hover:text-gray-400'
            href='https://upexpert.com.br/design'
            target='_blank'
            rel='noreferrer'
          >
            Webdisign
          </a>
        </div>
      </div>
    </div>
  );
}
