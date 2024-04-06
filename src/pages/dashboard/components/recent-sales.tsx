import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function RecentSales() {
  return (
    <div className='space-y-8'>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/01.png' alt='Avatar' />
          <AvatarFallback>CU</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>COOPERATIVE U</p>
          <p className='text-sm text-muted-foreground'>
            olivia.martin@email.com
          </p>
        </div>
        <div className='ml-auto font-medium'>+$1,999.00</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='flex h-9 w-9 items-center justify-center space-y-0 border'>
          <AvatarImage src='/avatars/02.png' alt='Avatar' />
          <AvatarFallback>LV</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>LOUIS VUITTON MALLETIER</p>
          <p className='text-sm text-muted-foreground'>jackson.lee@email.com</p>
        </div>
        <div className='ml-auto font-medium'>+$39.00</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/03.png' alt='Avatar' />
          <AvatarFallback>CF</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>CARFUEL</p>
          <p className='text-sm text-muted-foreground'>
            isabella.nguyen@email.com
          </p>
        </div>
        <div className='ml-auto font-medium'>+$299.00</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/04.png' alt='Avatar' />
          <AvatarFallback>MF</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>METRO FRANCE</p>
          <p className='text-sm text-muted-foreground'>will@email.com</p>
        </div>
        <div className='ml-auto font-medium'>+$99.00</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/05.png' alt='Avatar' />
          <AvatarFallback>GL</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>GROUPE LACTALIS</p>
          <p className='text-sm text-muted-foreground'>sofia.davis@email.com</p>
        </div>
        <div className='ml-auto font-medium'>+$39.00</div>
      </div>
    </div>
  )
}
