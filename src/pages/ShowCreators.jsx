import ContentCreatorCard from '../components/ContentCreatorCard';
import { useRef, forwardRef, useImperativeHandle } from 'react';
function ShowCreators({ contentCreators, isLoading, handleCurrentCreator, handleEditCreator, refToScroll }) {
    // If not loading and no content creators, display a message
    if (!isLoading && contentCreators.length === 0) {
        return (
            <div className="grid" ref={refToScroll}>
                <div className='ShowCreators'>
                    No content creator to display!
                </div>
            </div>
        );
    } else {
        // Display content creators using map
        return (
            <div className="grid" ref={refToScroll}>
                <div className='ShowCreators'>
                    <div className="creators-cards">
                        {contentCreators.map((creator) => (
                            <ContentCreatorCard
                                key={creator.id}
                                contentCreator={creator}
                                handleCurrentCreator={() => handleCurrentCreator(creator)}
                                handleEditCreator={() => handleEditCreator(creator)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowCreators;
