import PropTypes from 'prop-types';
import { Divider } from 'antd';
import 'antd/lib/divider/style/';
import StyledCard from './StyledCard';
import StyledCardTime from './StyledCardTime';
import StyledLabel from './StyledLabel';
import StyledLabels from './StyledLabels';
import StyledCardTitle from './StyledCardTitle';
import StyledRepoName from './StyledRepoName';
import StyledValue from './StyledValue';
import StyledValueLabel from './StyledValueLabel';
import StyledButtonChallenge from './StyledButtonChallenge';
import StyledHeader from './StyledHeader';
import StyledFooter from './StyledFooter';
import Button from '../../Button';
import { GetTimeAgo } from '../../../utils';

const generateLabels = (labels) =>
  <StyledLabels>
    {labels.map(label => (
      <StyledLabel key={label}>
        <Divider type="vertical"/>{' '}{label}
      </StyledLabel>
    ))}
  </StyledLabels>

const getTimeLabel = (time) =>
  <StyledCardTime>
    {GetTimeAgo(time)}
  </StyledCardTime>

const Card = ({name, labels, repoName, repoUrl, value, creationTime, issueUrl, styling}) =>
  <StyledCard>
    <StyledHeader>
      <div>
        <StyledCardTitle>
          {name}
        </StyledCardTitle>
        {generateLabels(labels)}
      </div>
      <div>
        {getTimeLabel(creationTime)}
      </div>
    </StyledHeader>
    <StyledRepoName>
      {repoName}
    </StyledRepoName>
    <StyledFooter>
      <div>
        <StyledValueLabel>
          Value
        </StyledValueLabel>
        <StyledValue>
          {value}
        </StyledValue>
      </div>
      <StyledButtonChallenge>
        <Button
          styling={styling.primary.blue}
          size="large"
          href="/placeholder"
        >
          Accept Challenge
      </Button>
      </StyledButtonChallenge>
    </StyledFooter>
  </StyledCard>

Card.propTypes = {
  styling: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  repoName: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  creationTime: PropTypes.number.isRequired,
  issueUrl: PropTypes.string.isRequired,
};

export default Card;
