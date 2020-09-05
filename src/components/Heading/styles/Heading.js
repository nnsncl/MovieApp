import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
    margin: 56px 0;
`;

export const Flex = styled(motion.div)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Padded = styled(motion.div)`
    padding: 56px 0;
`;