import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images';
import List from '../List';
import ListItem from '../ListItem';

const Navbar = () => {
  return (
    <>
    <div className='py-2 bg-secondary'>
        <Container>
            <Flex className='flex justify-between items-center px-2.5'>
                <Images src='src/assets/logo.png'/>
                <div className="menu">
                  <List className='flex gap-2'>
                    <ListItem title='home' className='py-2 px-4 nav_item' to='/'/>
                    <ListItem title='About' className='py-2 px-4 nav_item'/>
                    <ListItem title='services' className='py-2 px-4 nav_item'/>
                    <ListItem title='contact' className='py-2 px-4 nav_item'/>
                  </List>
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Navbar;