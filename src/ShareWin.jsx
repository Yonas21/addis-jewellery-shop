import React, { useState } from 'react';
import { FacebookShareButton, TwitterShareButton ,TelegramShareButton} from 'react-share'; // For social media sharing
import { Button, Modal } from 'react-bootstrap'; // Bootstrap components
import { getAuth } from 'firebase/auth';

const ShareAndWin = () => {
  const [showModal, setShowModal] = useState(false);
  const auth = getAuth();
	const user = auth.currentUser;

  const referralLink = `http://localhost:5173/login?code=${user.uid}`; // Example referral link

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setShowModal(true); // Show success modal after copying link
  };

  return (
    <div className="container" style={{marginTop:"250px"}}>
      <h1 className="text-center">Share and Win!</h1>
      <p className="text-center">
        Share this page with your friends and stand a chance to win exciting prizes!
      </p>
      
      <div className="d-flex justify-content-center">
        <FacebookShareButton url={referralLink} className="mx-2">
          <Button variant="primary">Share on Facebook</Button>
        </FacebookShareButton>

        <TwitterShareButton url={referralLink} className="mx-2">
          <Button variant="info">Share on Twitter</Button>
        </TwitterShareButton>
        
        <TelegramShareButton url={referralLink} className="mx-2">
          <Button variant="secondary">Share on Telegram</Button>
        </TelegramShareButton>

        <Button variant="success" className="mx-2" onClick={handleCopyLink}>
          Copy Referral Link
        </Button>
      </div>

      {/* Success Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Link Copied!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your referral link has been copied to the clipboard. Share it with your friends!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ShareAndWin;
