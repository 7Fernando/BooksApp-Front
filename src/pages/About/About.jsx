import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import NavBar from '../../components/navBar/navBar';
import Footer from '../../components/footer/Footer';
import userSin from '../../assets/images/userSin.png'

const Testimonial = ({ children }) => {
  return <Box height={'25vh'} spacing='10px' justify='center'>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <> 
    <NavBar />
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'2x1'} py={16} as={Stack} spacing={12}>
        <Stack spacing={10} align={'center'}>
          <Heading color={'green.400'}>About Us</Heading>
          <Text>We work on this project</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
        
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Full Stack Developer</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={userSin}
              name={'Mateo Dominguez'}
              title={'Full Stack Developer'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Full Stack Developer</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={userSin}
              name={'Lucas Heredia'}
              title={'Full Stack Developer'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Full Stack Developer</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
               
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={userSin}
              name={'Jose Antonio Urbani'}
              title={'Full Stack Developer'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Full Stack Developer</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
             
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={userSin}
              name={'Matias Filliez'}
              title={'Full Stack Developer'}
            />
          </Testimonial>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Full Stack Developer</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
               
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={userSin}
              name={'Fernando Cabezas'}
              title={'Full Stack Developer'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Full Stack Developer</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
            
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
             src={userSin}
              name={'Jose Miguel Alcaraz'}
              title={'Full Stack Developer'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Full Stack Developer</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
               
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
            src={userSin}
              name={'Alejandro Turresi'}
              title={'Full Stack Developer'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Full Stack Developer</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={userSin}
              name={'Lucia Gigena'}
              title={'Full Stack Developer'}
            />
          </Testimonial>
         
          
        </Stack>
      </Container>
    </Box>
    
    <Footer />
   
    </> 
  );
}