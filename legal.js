const laws = {
    "alabama": "Hormone therapy and surgery for trans youth is illegal [03/10/2021]. Those who have transitioned may request an amended birth certificate.",
    "alaska": "Trans people may request an amended birth certificate with the submission of ID, guardian's ID, and a letter attesting to needed treatment or a court order.",
    "arizona": "Those post-operation will be issued amended birth certificates.",
    "arkansas": "Trans people may request an amended birth certificate with a valid court order. There exists an 'X' gender marker. Trans people are banned from athletics. The use of puberty blockers/other gender affirming processes are illegal for those under 18.",
    "california": "Trans people may change their legal gender on most official documents. There exists an 'X' gender marker. All single occupancy bathrooms are required to be marked as gender neutral.",
    "colorado": "Trans people may request a change in gender marker. There exists an 'X' gender marker.",
    "connecticut": "Trans people may request a change in gender marker. There exists an 'X' gender marker.",
    "delaware": "Trans people may request a change in gender marker with the submission of a signed statement from a medical provider.",
    "florida": "Trans people may request a change in gender marker with the submission of a court order or a signed statement from a physician.",
    "georgia": "Post operative trans people may request a change in gender marker.",
    "hawaii": "Trans people may request a change in gender marker. There exists an 'X' gender marker.",
    "idaho": "Trans people cannot change the gender marker on their birth certificate, though a change in marker on driver's licenses and IDs is permitted. There exists an 'X' gender marker.",
    "illinois": "All single occupancy restrooms are marked gender neutral. Trans people can change their gender marker with the declaration of a gender transition from a physician.",
    "indiana": "Trans people may request a change in gender marker with a certified court order. There exists an 'X' gender marker.",
    "iowa": "Post operative trans people may request a legal change in gender.",
    "kansas": "Trans people may request a change in gender marker with either a court order or medical attestation. Schools may decide a transgender individual's athletic gender team on a case-by-case basis.",
    "kentucky": "Post operative trans people may request a legal change in gender. ",
    "louisiana": "Trans people may request a change in gender marker with a confirmation of sex reassignment. Gender affirming care is not covered by state insurance.",
    "maine": "Post operative trans people may request a change in gender marker. There exists an 'X' gender marker, but applicants require a declaration from a licensed physician and minors require parental consent.",
    "maryland": "Trans people may request a change in gender marker. There exists an 'X' gender marker.",
    "massachusetts": "Trans people may request a change in gender marker. There exists an 'X' gender marker.",
    "michigan": "Trans people must have undergone sex reassignment, a name change, and submit a medical affidavit in order to change their gender marker.",
    "minnesota": "Trans people may request a change in gender marker. There exists an 'X' gender marker.",
    "mississippi": "Trans people may request a change in gender marker with a certified court order and an official diagnosis of gender dysphoria. Transgender individuals are not permitted to participate in athletic teams that correspond with their identity.",
    "missouri": "Trans people may request a change in gender marker with a certified court order.",
    "montana": "Trans people may request a change in gender marker.",
    "nebraska": "Trans people may request a change in gender marker with the submission of an affidavit from a physician. Transgender students must have undergone sex reassignment or hormone therapy to participate in athletics.",
    "nevada": "Trans people will be issued a change in gender marker with the receipt of two affidavits. There exists an 'X' gender marker.",
    "new hampshire": "Post operative trans people may request a change in gender marker. There exists an 'X' gender marker.",
    "new jersey": "Trans people may request a change in gender marker. There exists an 'X' gender marker.",
    "new mexico": "Trans people may request a change in gender marker. All single occupancy bathrooms are required to be labeled gender neutral. There exists an 'X' gender marker.",
    "new york": "Trans people may request a change in gender marker. There exists an 'X' gender marker.",
    "north carolina": "Trans people may serve openly in the military.",
    "north dakota": "Trans people may change their legal gender.",
    "ohio": "Trans people may change their gender marker with a court order or a signed form from a physician.",
    "oklahoma": "Trans people may change their legal gender. To change a driver's license, a notarized statement from a physician is required.",
    "oregon": "Trans people may change their legal gender on request.",
    "pennsylvania": "Trans people may change their legal gender with a note from a physician. Minors require that their guardians must change their birth certificates for them. There exists an 'X' gender marker.",
    "rhode island": "Trans people may change their legal gender with the submission of an affidavit from a Physician. There exists an 'X' gender marker.",
    "South carolina": "Trans people may change their legal gender. Trans people are restricted from matching public restrooms.",
    "South dakota": "Trans people may change their legal gender with a court order, photo ID, as well as an application.",
    "tennessee": "Trans people may not change their legal gender. Trans youth are banned from participating in school athletics. A trans person using their corresponding bathroom is currently defined as indecent exposure.",
    "texas": "In marriage, trans people may not change their gender marker. Post operative trans people may change their legal gender.",
    "utah": "Trans people may change their gender marker. There exists an 'X' gender marker.",
    "vermont": "Trans people may change their gender marker. Single use restrooms are required to be marked gender neutral. There exists an 'X' gender marker.",
    "virginia": "Trans people with appropriate clinical treatment may change their gender marker. There exists an 'X' gender marker.",
    "washington": "Trans people may change their gender marker with the submission of designated forms. Minors require consent from a guardian. Trans individuals may use the bathroom that corresponds with their gender. There exists an 'X' gender marker.",
    "west virginia": "Trans people may change their gender marker with the submission of a gender designation form." };





function searchLaws() {
    let e = document.getElementById("states");
    let result = e.options[e.selectedIndex].value;
    console.log(result);

    document.getElementById("legality").innerHTML = laws[result];
}