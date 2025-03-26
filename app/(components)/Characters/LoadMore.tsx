import React from 'react'

interface LoadMoreProps {
    onLoadMore: (shouldLoad: boolean) => void;
}

const LoadMore: React.FC<LoadMoreProps> = ({ onLoadMore }) => {
    return (
        <button 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            onClick={() => onLoadMore(true)}
        >
            Load More
        </button>
    )
}

export default LoadMore