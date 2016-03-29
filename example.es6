import React from 'react';

const lightbg = { background: '#EEE' };
export default (
  <div>
    <h1>Grid examples</h1>
    <h2>Using gutters for columns</h2>

    <p>This is using a CSS `column-gap` value of width `var(--grid-gutter-m)`</p>
    <div className="example-1">
        <p>Bacon ipsum dolor amet pork belly ham ball tip strip steak kevin.
        Pastrami leberkas drumstick pork loin.
        Strip steak sirloin pig venison drumstick, meatball.</p>
        <p>Pancetta meatball rump turducken meatloaf leberkas.
        Ham prosciutto cupim drumstick. Tri-tip shank pastrami pork jowl.
        Ham beef capicola cow hamburger. Swine fatback cupim cow.</p>
        <p>Shank sirloin t-bone, tongue kielbasa rump ham short loin chicken
        cow tenderloin. Boudin salami ground round picanha, bresaola strip
        steak capicola ham venison. Pork chop meatball flank kielbasa.
        Bacon beef ribs t-bone.</p>
        <p>Shankle venison prosciutto picanha alcatra shoulder beef pork
        loin filet mignon. Boudin short ribs short loin, jowl turducken
        chicken frankfurter drumstick t-bone leberkas strip steak tongue
        biltong. Rump salami pig, tri-tip boudin prosciutto swine alcatra
        ribeye ham hock frankfurter tongue landjaeger kevin.
        Kevin landjaeger rump prosciutto.</p>
        <p>Pork loin tail leberkas spare ribs filet mignon beef.
        Filet mignon sausage bacon, chicken ribeye rump kevin shankle jowl.
        Capicola cow tri-tip ham bacon meatball salami pancetta shoulder
        porchetta alcatra sausage venison pastrami biltong. Pork picanha
        pig ham hock sausage, porchetta venison kielbasa.</p>
    </div>

    <p>The below boxes are separated horizontally by the value of
    `var(--grid-gutter-m)` and vertically by the value of
    `var(--grid-spacing-sloth)`</p>
    <div className="example-2">
        <div className="box1">
            <div style={lightbg}>
                Box 1
            </div>
        </div>
        <div className="box2">
            <div style={lightbg}>
                Box 2
            </div>
        </div>
        <div className="box3">
            <div style={lightbg}>
                Box 3
            </div>
        </div>
    </div>
  </div>
);
