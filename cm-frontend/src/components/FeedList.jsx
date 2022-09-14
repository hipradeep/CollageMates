import React from 'react'
import '../App.css';
import { FaHeart } from "react-icons/fa";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
export default function FeedList() {
    const myList = ['Peter', 'Sachin', 'Kevin', 'Dhoni', 'Alisa', 'Sachin', 'Kevin', 'Dhoni', 'Alisa', 'Sachin', 'Kevin', 'Dhoni', 'Alisa'];


    const listItems = myList.map((myList) => {


        return <li>

            {/* {myList} */}

            <div className="row ">
                <div className="col-1 ">
                    <div className="box">
                        <img class="card-img-top picture" src={require('../avatar.jpg')} alt="BigCo Inc. logo" />
                    </div>
                </div>
                <div className="col-11">
                    <div className="mx-3">
                        <div className='feedHeading'>
                            {myList}
                        </div>
                        <div className='feedSubHeading'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam eum, consequatur nesciunt quae, aspernatur corrupti suscipit quo accusantium hic ad sapiente pariatur nisi totam praesentium! Reiciendis ipsum alias quidem.
                        </div>

                        <div className='text-end mt-2'>
                            <FaHeart className='mx-3'/>
                            <BsFillChatLeftDotsFill className='ms-2' />
                           
                        </div>

                    </div>


                </div>
            </div>
            <hr className='mb-4'/>

        </li>;


    });

    return (
        <div><ul> {listItems} </ul>   </div>
    )
}
