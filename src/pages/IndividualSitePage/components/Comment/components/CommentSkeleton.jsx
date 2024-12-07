import ContentLoader from 'react-content-loader'

export const CommentSkeleton = props => (
  <ContentLoader 
  viewBox="0 0 380 100" 
  height={100} 
  width={'100%'} 
  {...props}
  >
  
    <circle cx="39.2" cy="39.5" r="20" />
    <rect x="69.9" y="29.5" width="125.5" height="10" />
    <rect x="69.9" y="44.7" width="296" height="10" />
    <rect x="69.9" y="60.8" width="253.5" height="10" />
    
    </ContentLoader>
)


