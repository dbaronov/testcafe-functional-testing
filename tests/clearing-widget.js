import { expect } from 'chai';
import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';

// Declare the parameterized selector function
// to obtain text content of an element identified by the `id` attribute


fixture `Getting Started`

    .page('https://www.uel.ac.uk/Deniss/Clearing%20Widget%20demo');

test('Loading component page, interacting and checking for expected values', async t => {

    const course_input = await t.select('#input-course');
    const calculate_points = await t.select('.c-clearing-search-widget__button-open');
    const apply_points = await t.select('.c-clearing-search-widget__apply-btn');
    const qualification_select = '#c-clearing-search-widget__qualification-row-select';
    const grade_select = '#c-clearing-search-widget__qualification-grade';
    const add_qualification = '.c-clearing-search-widget__add-qualification';
    const cancel_btn = '.c-clearing-search-widget__cancel-btn';
    let total_points = 0;

    await t
        .typeText(course_input, 'business')
        // Clicking "Calculate points"
        .click(calculate_points)
        .wait(750)

        // First row selections
        .click(Selector(qualification_select + '0'))
        .click(Selector(qualification_select + '0 option', { text: 'A-level' }))
        .click(Selector(grade_select + '-0'))
        .click(Selector(grade_select + '-0 option', { text: 'A* (140 points)' }))


        // Second row selections
        .click(Selector(qualification_select + '1'))
        .click(Selector(qualification_select + '1 option', { text: 'A Level Double Award' }))
        .click(Selector(grade_select + '-1'))
        .click(Selector(grade_select + '-1 option', { text: 'A* A* (280 points)' }))

        // Third row selections
        .click(Selector(qualification_select + '2'))
        .click(Selector(qualification_select + '2 option', { text: 'AAT Level 3 Diploma in Accounting QCF' }))
        .click(Selector(grade_select + '-2'))
        .click(Selector(grade_select + '-2 option', { text: 'Pass (160 points)' }))

        // take Screenshot
        .takeScreenshot('1.png')

        // Adding new row to add another qualification
        .click(add_qualification)
        .wait(750)

        // Fourth row selections
        .click(Selector(qualification_select + '3'))
        .click(Selector(qualification_select + '3 option', { text: 'AAT NVQ Level 3 in Accounting' }))
        .click(Selector(grade_select + '-3'))
        .click(Selector(grade_select + '-3 option', { text: 'Pass (160 points)' }))

        .click(add_qualification)
        .wait(750)

        // Fourth row selections
        .click(Selector(qualification_select + '4'))
        .click(Selector(qualification_select + '4 option', { text: 'Welsh Baccalaureate' }))
        .click(Selector(grade_select + '-4'))
        .click(Selector(grade_select + '-4 option', { text: 'Pass (120 points)' }))

        // Wait a sec and click "Apply Points"
        .wait(750)
        .click(apply_points)
        .wait(750)

        // take Screenshot
        .takeScreenshot('2.png')

        // Clicking "Calculate points"
        .click(calculate_points)
        .wait(750)

        // Clicking "Calculate points"
        .click(cancel_btn)
        .wait(750)

        // take Screenshot
        .takeScreenshot('3.png')

        // Test End

    const ref_points = await t.select('.c-clearing-search-widget__points');
    const input_points = await t.select('.c-clearing-search-widget__input-points');

    expect(ref_points.textContent).to.equal(input_points.value);

});