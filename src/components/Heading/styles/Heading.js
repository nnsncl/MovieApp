import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
    margin: 56px 0;
`;

export const Flex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Padded = styled.div`
    padding: 56px 0;
`;