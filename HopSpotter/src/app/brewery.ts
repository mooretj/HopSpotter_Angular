
export interface Brewery {
    breweryId: number,
    breweryName: string,
    breweryMainImg: string,
    website: string,
    history: string,
    breweryContact: {
        breweryId: number,
        email: string,
        phone: number,
        breweryAddress: string
    },
    breweryHours: {
        brewery_id: number,
                    sundayOpen: string,
                    sundayClose: string,
                    mondayOpen: string,
                    mondayClose: string,
                    tuesdayOpen: string,
                    tuesdayClose: string,
                    wednesdayOpen: string,
                    wednesdayClose: string,
                    thursdayOpen: string,
                    thursdayClose: string,
                    fridayOpen: string,
                    fridayClose: string,
                    saturdayOpen: string,
                    saturdayClose: string,
    }
}
