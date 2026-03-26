

interface IconType {
   icon: string;
   className?: string,
   onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function Icon({icon, className, onClick}: IconType) {
   return (
      <div className={className ? className : ''} onClick={onClick}>
         {icon === 'menubar' &&
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="23" viewBox="0 0 35 23" fill="none">
               <line x1="1.5" y1="1.5" x2="33.5" y2="1.5" stroke="white" strokeWidth="3" strokeLinecap="round"/>
               <line x1="1.5" y1="11.5" x2="33.5" y2="11.5" stroke="white" strokeWidth="3" strokeLinecap="round"/>
               <line x1="1.5" y1="21.5" x2="33.5" y2="21.5" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            </svg>
         }
      </div>
   )
}