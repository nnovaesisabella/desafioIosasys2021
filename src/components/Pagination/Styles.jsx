/*eslint-disable*/
import styled from 'styled-components';


export const PaginationRouter = styled.div`
 display: flex;
  justify-content:flex-end;
  width:80%;
`;
export const ListItems = styled.ul`

`;

export const BtnPrev = styled.button`
  color: black;
  font-weight:600;
  outline:none;
  cursor:pointer;

`;
export const BtnNext = styled.button`
 color: black;
  font-weight:600;
  cursor: pointer;
`;

export const CardBook = styled.div`
	width: 272px;
	height: 160px;
	display: flex;
	background: #ffffff;
	box-shadow: rgba(84, 16, 95, 0.13);
	justify-content: center;
	cursor: pointer;

	-webkit-box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.3);
	-moz-box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.3);
	box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.3);

	:hover {
		opacity: 0.5;
	}
`;


export const ImgBook = styled.div`
	width: 113px;
	justify-content: center;
	display: flex;
	align-items: center;
	margin-top: 21;
`;

export const Img = styled.img`
	width: 81px;
	height: 112px;
`;


export const ContentDescription = styled.div`
	display: flex;
	flex-direction: column;
`;


export const Title = styled.p`
	font-size: 1rem;
	color: #333333;
	font-weight: bold;
	margin-top: 16px;
`;


export const AuthorBooks = styled.p`
	color: #ab2680;
	font-size: 0.75rem;
	font-weight: bold;
`;

export const NumberPages = styled.p`
	color: #999999;
	font-weight: 600;
	margin-top: 28px;
	font-size: 0.75rem;
`;
export const EditionBooks = styled.p`
	color: #999999;
	font-weight: 600;
	font-size: 0.75rem;
`;

export const PublishingBooks = styled.p`
	color: #999999;
	font-weight: 600;
	font-size: 0.75rem;
`;
