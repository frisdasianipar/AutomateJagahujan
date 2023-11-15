describe('template spec', () => {
    it('passes', () => {
        cy.visit('jagahujan.ptape.com')
        cy.get('.header-web > .align-center > .d-flex').click()
        cy.get(':nth-child(2) > .v-input > .v-input__control > .v-input__slot').type('fajar.anggara@gmail.com')
        cy.get('#input-63').click()

        cy.get('[aria-label="Next month"] > .v-btn__content > .v-icon').click()

        cy.get(':nth-child(4) > :nth-child(3) > .v-btn')
        cy.get('.v-picker__actions > :nth-child(3)').click()

        cy.get('#input-67').click()
        cy.get(':nth-child(7) > :nth-child(3) > .other-date').click({multiple:true, force:true})
        cy.get('.v-picker__actions > :nth-child(3)').click({multiple:true, force:true})

        cy.get('.card-inactive').click()
        cy.wait(1000)
        cy.get('.web-view > .white--text').click()
       

        // FORM
        cy.get('.v-form > :nth-child(1) > .v-input__control > .v-input__slot > .v-text-field__slot').type('3201159082776519')
        cy.get(':nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').type('Frisda Sianipar')
        cy.get(':nth-child(4) > .v-input__control > .v-input__slot > .v-text-field__slot').click()
        cy.get('.v-date-picker-years > :nth-child(2)').click({multiple:true, force:true})
        cy.get(':nth-child(1) > :nth-child(3) > .v-btn').click({multiple:true, force:true})
        cy.get(':nth-child(2) > :nth-child(5) > .v-btn').click({multiple:true, force:true})
        cy.get(':nth-child(1) > :nth-child(3) > .v-btn').click({multiple:true, force:true})

        cy.wait(500)
        cy.get('.no-hp > .v-input__control > .v-input__slot').type('8216736838')
        cy.get('.v-form > .justify-space-between > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > :nth-child(1) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click({multiple:true, force:true})
        
        // jenis kelamin
        cy.get(':nth-child(9) > .v-input__control > .v-input__slot').click({multiple:true, force:true})
        cy.get('.v-menu__content > .v-list > .v-list-item:nth-child(2)').click({multiple:true, force:true})
        
        // form prov
        cy.wait(1000)
        cy.get('[style="cursor: pointer;"] > .v-input > .v-input__control > .v-input__slot').click()
        cy.get('.v-menu__content > .v-list > .v-list-item:nth-child(2)').click({multiple:true, force:true})

        // form kab/kota
        cy.wait(1000)
        cy.get(':nth-child(3) > .v-input > .v-input__control > .v-input__slot').click({multiple:true, force: true})
        cy.get('.v-menu__content > .v-list > .v-list-item:nth-child(4)').click({multiple:true, force:true})

        // form kecamatan
        cy.wait(2000)
        cy.get(':nth-child(4) > .v-input > .v-input__control > .v-input__slot').click({multiple:true, force: true})
        cy.get('.v-menu__content > .v-list > .v-list-item:nth-child(11)').click({multiple:true, force:true})

        // form kelurahan
        cy.wait(500)
        cy.get(':nth-child(5) > .v-input > .v-input__control > .v-input__slot').click({multiple:true, force:true})
        cy.get('.v-menu__content > .v-list > .v-list-item:nth-child(2)').click({multiple:true, force:true})

        // alamat
        cy.get('.v-textarea > .v-input__control > .v-input__slot').type('Musholla Al-Mahsurin, Jl K.H Ramli')
        cy.get('.form-user > .box-btn > .white--text').click()

        // syarat dan ketentuan
        cy.get('.v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click()
        // cy.get('.card-premi h6').then(() => {
        //     cy.wait(1000)
        // })
        // cy.get('.term .metode-pembayaran-pernyataan .v-input--checkbox` .mdi-checkbox-blank-outline').click()
        // cy.get('.mt-1 > .white--text').click()
        
    })
})