import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo, faSave, faUndo, faWindowClose, faWindowMaximize, faWindowMinimize } from '@fortawesome/free-solid-svg-icons'

const HeaderStyle = () => {
    return (
        <>
            <section className="header_bar">
                <div className="header_wrapper">
                    <div className="header_icons">
                        <FontAwesomeIcon icon={faSave} inverse />
                        <FontAwesomeIcon icon={faUndo} inverse />
                        <FontAwesomeIcon icon={faRedo} inverse /> 
                    </div>
                    <p className="document_title">Important Document.docx</p>
                    <div className="header_icons">
                        <FontAwesomeIcon icon={faWindowMinimize} inverse />
                        <FontAwesomeIcon icon={faWindowMaximize} inverse />
                        <FontAwesomeIcon icon={faWindowClose} inverse />
                    </div>
                </div>
                <div className="header_items">
                    <ul className="header_menubar">
                        <li className="header_menubar__items">Home</li>
                        <li className="header_menubar__items">Insert</li>
                        <li className="header_menubar__items">Design</li>
                        <li className="header_menubar__items">Layout</li>
                        <li className="header_menubar__items">References</li>
                        <li className="header_menubar__items">Review</li>
                        <li className="header_menubar__items">View</li>
                    </ul>
                </div>
                
            </section>
        </>
    );
};

export default HeaderStyle;