import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

const Instagram = () => {
    return (
        <InstagramEmbed
            url='https://instagr.am/p/CczuTgMsMqq/'
            clientAccessToken='IGQVJXMVNZAWF9wYzhKLVZAyOXIxanczRlhSdDdVTWFKeGNyN2FOTWNTMlN3TGVJTEUzMlRQMUdsS2JBV0h2MEJ2ZAGtpLXhrZAlBOWTFpWWVLeDZAHNkRCZAzdZAeW5wejh3ZAjdtNTV4empDNjJ3MnJ1WjFYWgZDZD'
            maxWidth={320}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
        />
    )
}

export default Instagram;